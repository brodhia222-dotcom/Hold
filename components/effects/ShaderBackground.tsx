"use client"

import { useEffect, useRef } from "react"
import "./shader-background.css"

/**
 * Background WebGL2 con shader GLSL adaptado al manual HOLD.
 *
 * Basado en el shader-animation de aliimam (21st.dev). El shader original
 * usaba tonos sepia oscuros (vec3(bg*.25, bg*.137, bg*.05)); acá lo
 * reemplazamos por una palette() que devuelve mezclas de los Pantone HOLD
 * (coral, azul, rosa, rojo, blanco) sobre fondo Star White. El movimiento
 * lo da fbm noise + tiempo. Interactividad por mouse (`mouseMove` uniform).
 */

const VERTEX_SRC = `#version 300 es
precision highp float;
in vec4 position;
void main(){ gl_Position = position; }`

/* Fragment shader: paleta HOLD + clouds noise.
 * Está basado en el original de Matthias Hurrle (@atzedent) — adaptado. */
const FRAGMENT_SRC = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x, R.y)

/* Paleta HOLD: 5 colores Pantone interpolados por un parámetro t∈[0,1]. */
vec3 holdPalette(float t) {
  vec3 coral = vec3(0.914, 0.412, 0.318); // #E96951
  vec3 blue  = vec3(0.169, 0.388, 1.000); // #2B63FF
  vec3 pink  = vec3(0.922, 0.741, 0.851); // #EBBDD9
  vec3 red   = vec3(0.976, 0.259, 0.227); // #F9423A
  vec3 black = vec3(0.114, 0.114, 0.106); // #1D1D1B

  t = fract(t);
  float seg = t * 4.0;
  int i = int(floor(seg));
  float f = fract(seg);
  if (i == 0) return mix(coral, blue,  f);
  if (i == 1) return mix(blue,  pink,  f);
  if (i == 2) return mix(pink,  red,   f);
  return            mix(red,   coral, f);
}

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(in vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  float
    a = rnd(i),
    b = rnd(i + vec2(1, 0)),
    c = rnd(i + vec2(0, 1)),
    d = rnd(i + 1.0);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float t = 0.0, a = 1.0; mat2 m = mat2(1.0, -0.5, 0.2, 1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2.0 * m;
    a *= 0.5;
  }
  return t;
}

float clouds(vec2 p) {
  float d = 1.0, t = 0.0;
  for (float i = 0.0; i < 3.0; i++) {
    float a = d * fbm(i * 10.0 + p.x * 0.2 + 0.2 * (1.0 + i) * p.y + d + i * i + p);
    t = mix(t, d, a);
    d = a;
    p *= 2.0 / (i + 1.0);
  }
  return t;
}

void main(void) {
  vec2 uv = (FC - 0.5 * R) / MN;
  vec2 st = uv * vec2(2, 1);
  /* Star White como base (el bg HOLD). */
  vec3 bgWhite = vec3(0.980, 1.0, 0.980);
  vec3 col = bgWhite;

  /* Mouse influence: sutil desplazamiento de uv según move uniform. */
  uv += move * 0.0008;

  /* Cloud base modulada por tiempo — controla la mezcla con la paleta. */
  float bg = clouds(vec2(st.x + T * 0.18, -st.y));

  /* Loop de capas: cada iteración suma una mancha de color del palette. */
  uv *= 1.0 - 0.3 * (sin(T * 0.2) * 0.5 + 0.5);
  for (float i = 1.0; i < 10.0; i++) {
    uv += 0.10 * cos(i * vec2(0.1 + 0.01 * i, 0.8) + i * i + T * 0.4 + 0.1 * uv.x);
    vec2 p = uv;
    float d = length(p);

    /* Color sampled de la paleta HOLD según i y tiempo. */
    vec3 cc = holdPalette(i * 0.13 + T * 0.04 + bg * 0.2);

    col += 0.0018 / d * cc;
    float b = noise(i + p + bg * 1.731);
    col += 0.0028 * b / length(max(p, vec2(b * p.x * 0.02, p.y))) * cc;

    /* Mezcla suave con bg blanco — mantiene la composición clara y legible. */
    col = mix(col, bgWhite * (0.92 + 0.08 * bg), d * 0.45);
  }

  /* Clamp para evitar quemados que rompan legibilidad del texto. */
  col = clamp(col, 0.0, 1.0);
  O = vec4(col, 1.0);
}`

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2") as WebGL2RenderingContext | null
    if (!gl) {
      // WebGL2 no soportado — el canvas queda transparente y se ve el bg del wrapper.
      console.warn("WebGL2 no soportado. Shader background no se renderiza.")
      return
    }

    /* DPR cap a 1.5 para perfomance en pantallas retina. */
    const getDpr = () => Math.min(1.5, Math.max(1, window.devicePixelRatio || 1))

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = compile(gl.VERTEX_SHADER, VERTEX_SRC)
    const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC)
    if (!vs || !fs) return

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program))
      return
    }
    gl.useProgram(program)

    const vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1])
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const positionLoc = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, "resolution")
    const uTime = gl.getUniformLocation(program, "time")
    const uMove = gl.getUniformLocation(program, "move")

    const move = [0, 0]
    const lastPos = [0, 0]

    const onPointerMove = (e: PointerEvent) => {
      const dx = e.clientX - lastPos[0]
      const dy = e.clientY - lastPos[1]
      lastPos[0] = e.clientX
      lastPos[1] = e.clientY
      move[0] += dx
      move[1] += dy
    }

    const resize = () => {
      const dpr = getDpr()
      const w = canvas.clientWidth || window.innerWidth
      const h = canvas.clientHeight || window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })
    canvas.addEventListener("pointermove", onPointerMove)

    let raf = 0
    let mounted = true
    const start = performance.now()

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const loop = (now: number) => {
      if (!mounted) return
      const t = reduced ? 0 : (now - start) * 0.001
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)
      gl.uniform2f(uMove, move[0], move[1])
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      mounted = false
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onPointerMove)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="hold-shader-bg" aria-hidden />
  )
}
