'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const BASE_POSITION = new THREE.Vector3(0, 0.6, 3.5)

/**
 * Look at the centre of the Canvas cell.
 *
 * This used to be lookAt(0.8, 0.3, 0). That 0.8 on X was not a compositional
 * choice — it existed to swing the camera away from the headline back when the
 * Canvas was an `absolute inset-0` layer spanning the whole Hero. The Canvas now
 * has its own grid column, so the subject is centred in frame instead of being
 * corrected for in camera space.
 */
const LOOK_AT = new THREE.Vector3(0, 0.3, 0)

interface CameraControllerProps {
  mousePosition: { x: number; y: number }
  /** false on touch / low-power tiers: static framing, no mouse tracking. */
  interactive?: boolean
}

export function CameraController({ mousePosition, interactive = true }: CameraControllerProps) {
  const { camera } = useThree()
  const targetPosition = useRef(BASE_POSITION.clone())
  const currentPosition = useRef(BASE_POSITION.clone())

  useFrame(() => {
    // Non-interactive tiers still run through here so that every tier shares the
    // same framing; only the mouse-driven drift is skipped.
    if (!interactive) {
      camera.position.copy(BASE_POSITION)
      camera.lookAt(LOOK_AT)
      return
    }

    // 根据鼠标位置微调摄像机 - 非常轻微
    targetPosition.current.set(
      mousePosition.x * 0.15,
      0.6 + mousePosition.y * 0.08,
      3.5
    )

    // 平滑过渡
    currentPosition.current.lerp(targetPosition.current, 0.025)
    camera.position.copy(currentPosition.current)

    camera.lookAt(LOOK_AT)
  })

  return null
}
