'use client'

import { Component, Suspense, useCallback, useEffect, useState, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { ChameleonModel } from './GeckoModel'
import { Environment } from './Environment'
import { CameraController } from './CameraController'
import { SceneLoader } from './Loader'

interface SceneErrorBoundaryProps {
  children: ReactNode
  onError: () => void
}

class SceneErrorBoundary extends Component<SceneErrorBoundaryProps, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch() {
    this.props.onError()
  }

  render() {
    // A dead GLB must never take the Hero copy down with it — the scene simply
    // drops out and the Dark Luxury copy layer keeps rendering above it.
    if (this.state.failed) return null
    return this.props.children
  }
}

type Tier = 'mobile' | 'tablet' | 'desktop'

/**
 * Per-tier scale for the Chameleon, measured against the real GLB bounds
 * (X 0.286 x Y 0.701 x Z 0.979) with the camera at [0, 0.6, 3.5] / fov 45.
 *
 * Position is [0, 0, 0] on every tier: the Canvas now occupies its own grid
 * column, so the model is composed against the centre of that column. The old
 * per-tier X/Z offsets ([1.2, 0, 0] / [0.6, 0, 0.4] / [-0.05, 0, 2.0]) existed
 * only to push the model out from under the headline while the Canvas was
 * full-bleed; that job now belongs to CSS Grid.
 *
 * Only scale differs, and only because the cells have different *aspect ratios*.
 * The tier boundaries line up exactly with the layout modes in Hero.tsx:
 *   mobile  (<768)      single column, cell ~1.05:1  -> model spans ~47% of frame
 *   tablet  (768-1023)  single column, cell ~1.7:1   -> a wide, short cell, so the
 *                                                       model needs a larger scale
 *                                                       to avoid looking marooned
 *   desktop (>=1024)    two columns,   cell ~1:1     -> ~55% of frame
 *
 * rotationY = -PI/2 is not a guess: at rotationY 0 the model's long axis points
 * at the camera and reads as an unrecognisable blob, so it is turned to present
 * its side profile. Re-check these if the GLB is ever swapped.
 */
const MODEL_POSITION: [number, number, number] = [0, 0, 0]
const SCALE: Record<Tier, number> = {
  desktop: 1.65,
  tablet: 2.0,
  mobile: 1.45,
}

const ROTATION: [number, number, number] = [0, -Math.PI / 2, 0]

/**
 * Returns null until the client has actually measured the viewport.
 *
 * It previously seeded 'desktop', which meant a phone rendered one frame of the
 * desktop composition before correcting itself. Seeding 'mobile' instead would
 * just move the flash to desktop, and reading matchMedia in a useState
 * initialiser would desync from the server-rendered HTML (hydration mismatch).
 * So: server and first client render agree on null, GeckoScene holds the Canvas
 * back until the real tier lands one tick later, and no wrong frame is ever
 * painted. The SceneLoader veil already covers that tick.
 */
function useTier(): Tier | null {
  const [tier, setTier] = useState<Tier | null>(null)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')

    const resolve = () => setTier(mobile.matches ? 'mobile' : tablet.matches ? 'tablet' : 'desktop')
    resolve()

    mobile.addEventListener('change', resolve)
    tablet.addEventListener('change', resolve)
    return () => {
      mobile.removeEventListener('change', resolve)
      tablet.removeEventListener('change', resolve)
    }
  }, [])

  return tier
}

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(pointer: coarse)')
    setIsTouch(query.matches)

    const onChange = (event: MediaQueryListEvent) => setIsTouch(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return isTouch
}

function useMousePosition(enabled: boolean) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return

    let rafId = 0
    const handleMouseMove = (event: MouseEvent) => {
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
  }, [enabled])

  return mousePosition
}

export function GeckoScene() {
  const tier = useTier()
  const isTouch = useIsTouch()
  const lowPower = tier === 'mobile' || isTouch

  const mousePosition = useMousePosition(!lowPower)
  const [loaded, setLoaded] = useState(false)
  const handleReady = useCallback(() => setLoaded(true), [])

  // The Canvas fills whatever cell Hero gives it; it never sizes the layout.
  return (
    <div className="relative w-full h-full">
      {/*
        `shadows`, `dpr` and everything under `gl` are read once, when the WebGL
        context is created — WebGL has no way to toggle antialias or
        powerPreference on a live context. They are therefore deliberately NOT
        reactive: resizing the window will not switch them, and pretending
        otherwise would be a lie in code. The tier gate above is what makes this
        correct: the Canvas is not mounted until the real tier is known, so these
        values are right at creation time. A tier change after that (rotating a
        tablet, dragging a window between displays) keeps the context it has.
      */}
      {tier !== null && (
        <Canvas
          shadows={!lowPower}
          dpr={lowPower ? [1, 1.5] : [1, 2]}
          camera={{
            position: [0, 0.6, 3.5],
            fov: 45,
            near: 0.1,
            far: 100,
          }}
          gl={{
            antialias: !lowPower,
            alpha: true,
            powerPreference: lowPower ? 'low-power' : 'high-performance',
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <SceneErrorBoundary onError={handleReady}>
            <Suspense fallback={null}>
              <CameraController mousePosition={mousePosition} interactive={!lowPower} />
              <Environment mobile={lowPower} />
              <ChameleonModel
                position={MODEL_POSITION}
                scale={SCALE[tier]}
                rotation={ROTATION}
                mousePosition={mousePosition}
                interactive={!lowPower}
                onReady={handleReady}
              />
            </Suspense>
          </SceneErrorBoundary>
        </Canvas>
      )}
      <SceneLoader visible={!loaded} />
    </div>
  )
}
