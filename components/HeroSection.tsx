'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      id: 1,
      title: "Premium Tobacco-Free Experience",
      subtitle: "Discover ZYLO",
      description: "Elevate your nicotine experience with our premium tobacco-free pouches. Clean, discreet, and available in exciting flavors.",
      cta: {
        primary: { text: "Shop Now", href: "#shop" },
        secondary: { text: "Learn More", href: "#about" }
      },
      image: "/images/hero/hero-1.jpg",
      bgGradient: "from-zylo-teal to-zylo-teal-light"
    },
    {
      id: 2,
      title: "Buy 2 Get 2 FREE",
      subtitle: "Limited Time Offer",
      description: "Stock up on your favorite ZYLO pouches with our incredible promotion. Premium quality at unbeatable value.",
      cta: {
        primary: { text: "Shop Offer", href: "#promo" },
        secondary: { text: "View Products", href: "#shop" }
      },
      image: "/images/hero/hero-2.jpg",
      bgGradient: "from-red-500 to-red-600"
    },
    {
      id: 3,
      title: "Subscribe & Save 15%",
      subtitle: "Never Run Out",
      description: "Join ZYLO+ subscription and save 15% on every order. Customize your delivery schedule and enjoy premium convenience.",
      cta: {
        primary: { text: "Start Subscription", href: "#subscription" },
        secondary: { text: "Learn About ZYLO+", href: "#zylo-plus" }
      },
      image: "/images/hero/hero-3.jpg",
      bgGradient: "from-purple-500 to-purple-600"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentHero.bgGradient}`}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        {/* Product Image Placeholder */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <div className="w-full h-full bg-white bg-opacity-10 rounded-l-[100px] flex items-center justify-center">
            {/* This would be the actual product image */}
            <div className="w-64 h-64 bg-white bg-opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            {/* Subtitle */}
            <div className="text-lg font-medium opacity-90">
              {currentHero.subtitle}
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {currentHero.title}
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-100 max-w-lg leading-relaxed">
              {currentHero.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentHero.cta.primary.href}
                className="btn-primary bg-white text-zylo-teal hover:bg-gray-100 text-lg px-8 py-4 inline-block text-center"
              >
                {currentHero.cta.primary.text}
              </Link>
              <Link
                href={currentHero.cta.secondary.href}
                className="btn-outline border-white text-white hover:bg-white hover:text-zylo-teal text-lg px-8 py-4 inline-block text-center"
              >
                {currentHero.cta.secondary.text}
              </Link>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">100% Tobacco-Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Discreet & Convenient</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
          
          {/* Product Showcase */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Main Product Display */}
              <div className="w-80 h-80 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white border-opacity-20">
                <div className="w-64 h-64 bg-white rounded-zylo shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-zylo rounded-zylo mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">ZYLO</span>
                    </div>
                    <div className="text-zylo-dark font-semibold">Premium Pouches</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-zylo-teal font-bold text-sm">NEW</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs text-center">21+<br/>ONLY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}