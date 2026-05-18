"use client"

import { useEffect, useRef } from "react"
import "./shader-background.css"

/**
 * Background WebGL2 con shader GLSL adaptado al manual HOLD.
 *
 * Approach: 3 nubes fbm independientes que se mueven a distintas
 * velocidades, cada una con un color HOLD distinto. Sobre Star White.
 * Las nubes se mezclan con smoothstep para tener bordes suaves.
 * Resultado: manchas claramente visibles de coral/azul/rosa/rojo que
 * derivan continuamente. Reactivo al mouse via 'move' uniform.
 */

const VERTEX_SRC = `#version 300 es
precision highp float;
in vec4 position;
void main(){ gl_Position = position; }`

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

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  float
    a = rnd(i),
    b = rnd(i + vec2(1, 0)),
    c = rnd(i + vec2(0, 1)),
    d = rnd(i + 1.0);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float total = 0.0, amp = 0.55;
  mat2 m = mat2(1.6, -0.8, 0.8, 1.6);
  for (int i = 0; i < 5; i++) {
    total += amp * noise(p);
    p = m * p;
    amp *= 0.5;
  }
  return total;
}

void main(void) {
  vec2 uv = (FC - 0.5 * R) / MN * 1.4;

  /* Mouse parallax: desplaza el uv sutil con el pointer. */
  uv += move * 0.0008;

  /* Base: Star White, el color de marca para el bg. */
  vec3 bgWhite = vec3(0.980, 1.0, 0.980);
  vec3 col = bgWhite;

  /* Tiempo lento — animación calma, no frenética. */
  float t = T * 0.25;

  /* === NUBES DE COLOR HOLD ===
     Cada nube tiene su offset, velocidad y dirección distinta para que
     se muevan independientemente y se crucen. */

  /* Nube 1 — Coral, grande, deriva NE */
  vec2 p1 = uv * 1.1 + vec2(t * 1.2, t * 0.7) + vec2(0.0, 0.0);
  float n1 = fbm(p1);
  vec3 coral = vec3(0.914, 0.412, 0.318);

  /* Nube 2 — Azul Bright, deriva SO */
  vec2 p2 = uv * 1.3 + vec2(-t * 0.9, -t * 1.1) + vec2(100.0, 50.0);
  float n2 = fbm(p2);
  vec3 blue = vec3(0.169, 0.388, 1.000);

  /* Nube 3 — Rosa Soft, deriva E */
  vec2 p3 = uv * 0.9 + vec2(t * 1.4, t * 0.3) + vec2(-80.0, 120.0);
  float n3 = fbm(p3);
  vec3 pink = vec3(0.922, 0.741, 0.851);

  /* Nube 4 — Rojo Warm, deriva O lento */
  vec2 p4 = uv * 1.5 + vec2(-t * 0.6, t * 0.8) + vec2(60.0, -90.0);
  float n4 = fbm(p4);
  vec3 red = vec3(0.976, 0.259, 0.227);

  /* Mezcla editorial: manchas presentes pero NO saturadas. Strength
     bajo 0.30-0.40 para que se sienta como un wash de color sutil,
     premium, no flashy. smoothstep alto = manchas más pequeñas y
     suaves. */
  col = mix(col, coral, smoothstep(0.52, 0.92, n1) * 0.40);
  col = mix(col, blue,  smoothstep(0.54, 0.94, n2) * 0.40);
  col = mix(col, pink,  smoothstep(0.50, 0.92, n3) * 0.32);
  col = mix(col, red,   smoothstep(0.55, 0.94, n4) * 0.38);

  /* Vignette generoso — oscurece bordes para sensación cinematográfica. */
  float vig = 1.0 - 0.32 * pow(length(uv * 0.55), 1.4);
  col *= vig;

  /* Grain ultra fino estático — textura papel premium. */
  float grain = (rnd(FC * 0.01 + T * 0.001) - 0.5) * 0.012;
  col += grain;

  O = vec4(clamp(col, 0.0, 1.0), 1.0);
}`

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2") as WebGL2RenderingContext | null
    if (!gl) {
      console.warn("WebGL2 no soportado. Shader background no se renderiza.")
      return
    }

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
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })
    canvas.addEventListener("pointermove", onPointerMove)

    /* ResizeObserver para reaccionar también a cambios de layout que no
       disparan window resize (e.g., sticky stack levantando al hero). */
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

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
      ro.disconnect()
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
