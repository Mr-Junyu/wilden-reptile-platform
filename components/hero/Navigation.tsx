'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  // 处理 Escape 键关闭菜单
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
      // 防止页面滚动
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background-primary/80 backdrop-blur-sm border-b border-text-primary/5">
      {/*
        Same .wilden-container as Hero — this is what puts the WILDEN wordmark's
        left edge on the exact same axis as the Hero H1 at every viewport width.
        The bar row is sized to --nav-h so the variable is a measured fact rather
        than an assumption Hero has to guess at.
      */}
      <div className="wilden-container">
        <div className="flex items-center justify-between h-[var(--nav-h)]">
          {/* Logo */}
          <Link
            href="/"
            className="text-text-primary font-semibold text-xl tracking-wider hover:text-accent-sand transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm"
            onClick={closeMenu}
          >
            WILDEN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/explore"
              className="text-text-primary text-sm tracking-wider hover:text-accent-sand transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm px-2 py-1"
            >
              EXPLORE
            </Link>
            <Link
              href="/species"
              className="text-text-primary text-sm tracking-wider hover:text-accent-sand transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm px-2 py-1"
            >
              SPECIES
            </Link>
            <Link
              href="/shop"
              className="text-text-primary text-sm tracking-wider hover:text-accent-sand transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm px-2 py-1"
            >
              SHOP
            </Link>

            {/* Account Icon */}
            <button
              className="w-10 h-10 rounded-full border border-text-primary/30 hover:border-accent-sand transition-colors duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary"
              aria-label="Account"
            >
              <div className="w-5 h-5 rounded-full bg-text-primary/20" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? 'max-h-96 opacity-100 mt-8'
              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          <div className="space-y-6 pb-8">
            <Link
              href="/explore"
              className="block text-text-primary text-sm tracking-wider hover:text-accent-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm px-2 py-1"
              onClick={closeMenu}
            >
              EXPLORE
            </Link>
            <Link
              href="/species"
              className="block text-text-primary text-sm tracking-wider hover:text-accent-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm px-2 py-1"
              onClick={closeMenu}
            >
              SPECIES
            </Link>
            <Link
              href="/shop"
              className="block text-text-primary text-sm tracking-wider hover:text-accent-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sand focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary rounded-sm px-2 py-1"
              onClick={closeMenu}
            >
              SHOP
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
