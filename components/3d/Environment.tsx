'use client'

import * as THREE from 'three'

export function Environment({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {/* 环境光 - 提供基础照明 */}
      <ambientLight intensity={0.4} color="#FFE5CC" />

      {/* 主光源 - Key Light - 温暖自然光 */}
      <directionalLight
        position={[8, 10, 6]}
        intensity={1.8}
        color="#FFF8E8"
        castShadow={!mobile}
        shadow-mapSize-width={mobile ? 512 : 2048}
        shadow-mapSize-height={mobile ? 512 : 2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />

      {/* 补光 - Fill Light - 柔和中性 */}
      <pointLight
        position={[-4, 3, -3]}
        intensity={0.6}
        color="#E8DCC8"
        distance={12}
        decay={2}
      />

      {/* 轮廓光 - Rim Light - 勾勒守宫边缘 */}
      <spotLight
        position={[0, 2, -4]}
        intensity={0.4}
        color="#D4A574"
        angle={Math.PI / 4}
        penumbra={0.8}
        distance={8}
      />

      {/* 沙漠地面 */}
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#1A1612"
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>

      {/* 岩石 1 - 左侧 */}
      <group position={[-1.5, 0.18, 0.8]}>
        <mesh castShadow receiveShadow rotation={[0.2, 0.6, 0.1]}>
          <dodecahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color="#2D2520"
            roughness={0.9}
            metalness={0.08}
          />
        </mesh>
      </group>

      {/* 岩石 2 - 右后方 */}
      <group position={[2.2, 0.12, -1.2]}>
        <mesh castShadow receiveShadow rotation={[0.3, -0.9, 0.2]}>
          <dodecahedronGeometry args={[0.24, 0]} />
          <meshStandardMaterial
            color="#342A24"
            roughness={0.88}
            metalness={0.08}
          />
        </mesh>
      </group>

      {/* 小石头 - 前景点缀 */}
      <mesh castShadow receiveShadow position={[0.5, 0.06, 1.5]} rotation={[0.1, 0.4, 0]}>
        <sphereGeometry args={[0.12, 10, 10]} />
        <meshStandardMaterial
          color="#3A3028"
          roughness={0.92}
          metalness={0.06}
        />
      </mesh>

      {/* 雾效 - 增加深度和氛围 */}
      <fog attach="fog" args={['#0B0A08', 10, 25]} />
    </>
  )
}
