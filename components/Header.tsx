'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NavigationItem } from '@/types'

// Mock navigation data
const navigationItems: NavigationItem[] = [
  {
    id: 'shop',
    label: 'SHOP',
    href: '#shop',
    children: [
      {
        id: 'all-products',
        label: 'All Products',
        href: '#all-products',
        featured: true,
        image: '/images/nav/all-products.jpg',
        description: 'Browse our complete collection'
      },
      {
        id: 'new-arrivals',
        label: 'New Arrivals',
        href: '#new-arrivals',
        featured: true,
        image: '/images/nav/new-arrivals.jpg',
        description: 'Latest flavors and innovations'
      },
      {
        id: 'best-sellers',
        label: 'Best Sellers',
        href: '#bestsellers',
        featured: true,
        image: '/images/nav/bestsellers.jpg',
        description: 'Most popular choices'
      }
    ]
  },
  {
    id: 'promo',
    label: 'BUY 2 GET 2 FREE',
    href: '#promo',
  },
  {
    id: 'subscription',
    label: 'SUBSCRIPTION',
    href: '#subscription',
  },
  {
    id: 'zylo-plus',
    label: 'ZYLO+',
    href: '#zylo-plus',
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [cartItemsCount, setCartItemsCount] = useState(0)

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle dropdown interactions
  const handleDropdownEnter = (itemId: string) => {
    setActiveDropdown(itemId)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl lg:text-3xl font-bold text-zylo-teal">
                ZYLO
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.id)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href || '#'}
                  className={`nav-link text-sm lg:text-base font-semibold tracking-wide ${
                    item.id === 'promo' 
                      ? 'text-red-600 hover:text-red-700 animate-pulse' 
                      : ''
                  }`}
                >
                  {item.label}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-zylo shadow-zylo-hover border border-gray-100 animate-fade-in">
                    <div className="p-6">
                      <div className="grid gap-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href || '#'}
                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-zylo-gray transition-colors duration-200"
                          >
                            {child.image && (
                              <div className="w-12 h-12 bg-zylo-gray rounded-lg flex-shrink-0">
                                {/* Image placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-zylo-teal to-zylo-teal-light rounded-lg"></div>
                              </div>
                            )}
                            <div>
                              <div className="font-semibold text-zylo-dark">
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="text-sm text-gray-600">
                                  {child.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section - Cart & Account */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-zylo-dark hover:text-zylo-teal transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account Icon */}
            <Link href="#account" className="p-2 text-zylo-dark hover:text-zylo-teal transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Cart Icon */}
            <Link href="#cart" className="relative p-2 text-zylo-dark hover:text-zylo-teal transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5-5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zylo-teal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-zylo-dark hover:text-zylo-teal transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-slide-up">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <Link
                    href={item.href || '#'}
                    className={`block px-4 py-2 text-base font-semibold rounded-lg transition-colors ${
                      item.id === 'promo' 
                        ? 'text-red-600 bg-red-50' 
                        : 'text-zylo-dark hover:bg-zylo-gray'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href || '#'}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-zylo-teal transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}