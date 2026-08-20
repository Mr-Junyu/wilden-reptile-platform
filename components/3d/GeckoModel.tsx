'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

/**
 * The real hero model is a Chameleon (变色龙), not a leopard gecko. The GLB is
 * Draco-compressed, so it needs the decoder shipped in public/draco/.
 *
 * The file was previously named leopard-gecko.glb; it is the same asset,
 * renamed to match what it actually is. This is the only path reference in the
 * codebase — the `leopard-gecko` strings in data/species.ts are a species slug
 * and a .jpg, unrelated to this model.
 */
const CHAMELEON_MODEL_PATH = '/models/chameleon.glb'

interface ChameleonModelProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
  mousePosition?: { x: number; y: number }
  interactive?: boolean
  onReady?: () => void
}

export function ChameleonModel({
  // Origin-centred by default: the Canvas now owns its own grid cell, so the
  // model is composed against the centre of that cell instead of being shoved
  // sideways to dodge the headline.
  position = [0, 0, 0],
  scale = 1.5,
  rotation = [0, 0, 0],
  mousePosition = { x: 0, y: 0 },
  interactive = true,
  onReady,
}: ChameleonModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(CHAMELEON_MODEL_PATH, '/draco/')

  const model = useMemo(() => scene.clone(true), [scene])

  // The GLB is authored around an arbitrary origin; re-seat it so the chameleon's
  // feet meet the y=0 ground plane in Environment.tsx instead of sinking through
  // it, and so its bounding box is centred on X/Z.
  const groundOffset = useMemo(() => {
    const box = new THREE.Box3().setFromObject(model)
    return new THREE.Vector3(
      -(box.min.x + box.max.x) / 2,
      -box.min.y,
      -(box.min.z + box.max.z) / 2
    )
  }, [model])

  useEffect(() => {
    onReady?.()
  }, [onReady])

  useFrame(({ clock }) => {
    const node = group.current
    if (!node) return

    const t = clock.getElapsedTime()

    // The GLB ships zero animation clips, so idle life is procedural.
    node.position.y = position[1] + Math.sin(t * 0.6) * 0.02

    if (!interactive) return

    node.rotation.y = THREE.MathUtils.lerp(
      node.rotation.y,
      rotation[1] + mousePosition.x * 0.08,
      0.03
    )
    node.rotation.x = THREE.MathUtils.lerp(
      node.rotation.x,
      rotation[0] - mousePosition.y * 0.04,
      0.03
    )
  })

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={model} position={groundOffset} />
    </group>
  )
}

useGLTF.preload(CHAMELEON_MODEL_PATH, '/draco/')
