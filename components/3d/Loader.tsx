'use client'

import { useEffect, useState } from 'react'

export function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟加载完成
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background-primary">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto border-2 border-accent-sand border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-text-secondary text-sm tracking-[0.3em] uppercase">
          ENTERING THE WILD
        </p>
      </div>
    </div>
  )
}
