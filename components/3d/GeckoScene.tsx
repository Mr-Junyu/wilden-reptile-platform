'use client'

import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { GeckoModel } from './GeckoModel'
import { Environment } from './Environment'
import { CameraController } from './CameraController'
import { Loader } from './Loader'

export function GeckoScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // 检测触摸设备，移动端不启用鼠标交互
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

    if (isTouchDevice) return

    let rafId: number
    const handleMouseMove = (event: MouseEvent) => {
      // 使用 requestAnimationFrame 节流，避免高频 state 更新
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1,
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0.6, 3.5],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <CameraController mousePosition={mousePosition} />
          <Environment />
          <GeckoModel mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}
