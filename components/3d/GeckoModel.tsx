'use client'

import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

interface GeckoModelProps {
  position?: [number, number, number]
  mousePosition?: { x: number; y: number }
}

export function GeckoModel({ position = [1.2, 0.2, 0], mousePosition = { x: 0, y: 0 } }: GeckoModelProps) {
  const group = useRef<THREE.Group>(null)
  const [hasModel, setHasModel] = useState(false)

  // 尝试加载真实 GLB 模型
  let gltf: any = null
  try {
    gltf = useGLTF('/models/gecko.glb')
    if (!hasModel) setHasModel(true)
  } catch (error) {
    // Fallback to placeholder
  }

  const { actions, mixer } = useAnimations(gltf?.animations || [], group)

  // 自动播放 Idle 动画
  useEffect(() => {
    if (actions) {
      // 优先级：Idle > 第一个可用动画
      const idleAction = actions['Idle'] || actions['idle'] || Object.values(actions)[0]
      if (idleAction) {
        idleAction.reset().play()
      }
    }
  }, [actions])

  // 轻微呼吸动画 + 鼠标跟随
  useFrame(({ clock }) => {
    if (group.current) {
      // 呼吸动画（仅在无真实模型时应用）
      if (!hasModel) {
        group.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8) * 0.03
      }

      // 头部轻微跟随鼠标
      const targetRotationY = mousePosition.x * 0.08
      const targetRotationX = -mousePosition.y * 0.04

      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotationY,
        0.03
      )
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetRotationX,
        0.03
      )
    }
  })

  return (
    <group ref={group} position={position}>
      {gltf ? (
        // 真实 GLB 模型
        <primitive object={gltf.scene} scale={1.5} />
      ) : (
        // Fallback 占位守宫
        <group>
          {/* 身体 */}
          <mesh castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <capsuleGeometry args={[0.15, 0.6, 12, 20]} />
            <meshStandardMaterial
              color="#C4A57B"
              roughness={0.6}
              metalness={0.05}
            />
          </mesh>

          {/* 头部 */}
          <mesh castShadow receiveShadow position={[0.45, 0, 0]}>
            <sphereGeometry args={[0.18, 20, 20]} />
            <meshStandardMaterial
              color="#B89968"
              roughness={0.5}
              metalness={0.05}
            />
          </mesh>

          {/* 尾巴 */}
          <mesh castShadow receiveShadow position={[-0.45, -0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
            <coneGeometry args={[0.1, 0.4, 12]} />
            <meshStandardMaterial
              color="#C4A57B"
              roughness={0.65}
              metalness={0.05}
            />
          </mesh>

          {/* 斑点 */}
          {[
            [0.15, 0.12, 0],
            [-0.1, 0.1, 0.08],
            [0.05, 0.14, -0.08],
            [-0.2, 0.08, 0.05],
            [0.25, 0.1, 0.1],
          ].map((pos, i) => (
            <mesh key={i} castShadow position={pos as [number, number, number]}>
              <sphereGeometry args={[0.035, 10, 10]} />
              <meshStandardMaterial color="#4A3A2A" roughness={0.8} />
            </mesh>
          ))}

          {/* 眼睛 */}
          <mesh castShadow position={[0.55, 0.1, 0.1]}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial color="#1A1A1A" roughness={0.2} metalness={0.6} />
          </mesh>
          <mesh castShadow position={[0.55, 0.1, -0.1]}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial color="#1A1A1A" roughness={0.2} metalness={0.6} />
          </mesh>
        </group>
      )}
    </group>
  )
}

// Preload
useGLTF.preload('/models/gecko.glb')
