'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface CameraControllerProps {
  mousePosition: { x: number; y: number }
}

export function CameraController({ mousePosition }: CameraControllerProps) {
  const { camera } = useThree()
  const targetPosition = useRef(new THREE.Vector3(0, 0.6, 3.5))
  const currentPosition = useRef(new THREE.Vector3(0, 0.6, 3.5))

  useFrame(() => {
    // 根据鼠标位置微调摄像机 - 非常轻微
    targetPosition.current.set(
      mousePosition.x * 0.15,
      0.6 + mousePosition.y * 0.08,
      3.5
    )

    // 平滑过渡
    currentPosition.current.lerp(targetPosition.current, 0.025)
    camera.position.copy(currentPosition.current)

    // 摄像机看向场景中心偏右（守宫位置）
    camera.lookAt(0.8, 0.3, 0)
  })

  return null
}
