'use client'

import { useEffect, useState } from 'react'
import { useProgress } from '@react-three/drei'

export function SceneLoader({ visible }: { visible: boolean }) {
  const { progress } = useProgress()
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setDismissed(true), 700)
    return () => clearTimeout(timer)
  }, [visible])

  useEffect(() => {
    // Failsafe: a stalled or 404'd GLB must never leave the veil up forever.
    const failsafe = setTimeout(() => setDismissed(true), 12000)
    return () => clearTimeout(failsafe)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Veil over the 3D layer only — the Hero copy sits above and stays readable. */}
      <div className="absolute inset-0 bg-[#0B0A08]" />

      <div className="absolute bottom-8 right-4 sm:bottom-10 sm:right-8 md:right-12 text-right">
        <p className="text-text-secondary text-[10px] tracking-[0.35em] uppercase font-light mb-3">
          ENTERING THE WILD
        </p>
        <div className="w-32 sm:w-40 h-[1px] ml-auto bg-text-primary/10 overflow-hidden">
          <div
            className="h-full bg-accent-sand transition-[width] duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  )
}
