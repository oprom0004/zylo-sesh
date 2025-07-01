'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/types'

// Mock product data
const mockProducts: Product[] = [
  {
    id: 'zylo-mint-6mg',
    name: 'ZYLO Mint',
    slug: 'zylo-mint',
    description: 'Refreshing mint flavor with a cool, crisp finish',
    shortDescription: 'Cool and refreshing mint',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    images: [
      { id: '1', url: '/images/products/mint-pack.jpg', alt: 'ZYLO Mint Pack', isPrimary: true }
    ],
    category: { id: 'mint', name: 'Mint', slug: 'mint' },
    flavors: [
      { id: 'mint', name: 'Mint', colorCode: '#4CAF50', isAvailable: true }
    ],
    strengths: [
      { id: '6mg', level: 'Medium', nicotineContent: 6, isAvailable: true },
      { id: '9mg', level: 'Strong', nicotineContent: 9, isAvailable: true }
    ],
    inStock: true,
    featured: true,
    subscriptionAvailable: true,
    subscriptionDiscount: 15,
    tags: ['bestseller', 'mint', 'refreshing'],
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: 'zylo-citrus-6mg',
    name: 'ZYLO Citrus Burst',
    slug: 'zylo-citrus-burst',
    description: 'Zesty citrus blend with orange and lemon notes',
    shortDescription: 'Zesty citrus blend',
    price: 24.99,
    images: [
      { id: '2', url: '/images/products/citrus-pack.jpg', alt: 'ZYLO Citrus Pack', isPrimary: true }
    ],
    category: { id: 'citrus', name: 'Citrus', slug: 'citrus' },
    flavors: [
      { id: 'citrus', name: 'Citrus', colorCode: '#FF9800', isAvailable: true }
    ],
    strengths: [
      { id: '6mg', level: 'Medium', nicotineContent: 6, isAvailable: true },
      { id: '9mg', level: 'Strong', nicotineContent: 9, isAvailable: true }
    ],
    inStock: true,
    featured: true,
    subscriptionAvailable: true,
    subscriptionDiscount: 15,
    tags: ['new', 'citrus', 'energizing'],
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: 'zylo-berry-6mg',
    name: 'ZYLO Berry Fusion',
    slug: 'zylo-berry-fusion',
    description: 'Sweet and tangy berry medley',
    shortDescription: 'Sweet berry blend',
    price: 24.99,
    images: [
      { id: '3', url: '/images/products/berry-pack.jpg', alt: 'ZYLO Berry Pack', isPrimary: true }
    ],
    category: { id: 'berry', name: 'Berry', slug: 'berry' },
    flavors: [
      { id: 'berry', name: 'Berry', colorCode: '#E91E63', isAvailable: true }
    ],
    strengths: [
      { id: '3mg', level: 'Light', nicotineContent: 3, isAvailable: true },
      { id: '6mg', level: 'Medium', nicotineContent: 6, isAvailable: true }
    ],
    inStock: true,
    featured: true,
    subscriptionAvailable: true,
    subscriptionDiscount: 15,
    tags: ['sweet', 'berry', 'fruity'],
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: 'zylo-vanilla-6mg',
    name: 'ZYLO Vanilla Cream',
    slug: 'zylo-vanilla-cream',
    description: 'Rich and smooth vanilla cream flavor',
    shortDescription: 'Smooth vanilla cream',
    price: 26.99,
    images: [
      { id: '4', url: '/images/products/vanilla-pack.jpg', alt: 'ZYLO Vanilla Pack', isPrimary: true }
    ],
    category: { id: 'cream', name: 'Cream', slug: 'cream' },
    flavors: [
      { id: 'vanilla', name: 'Vanilla', colorCode: '#FFC107', isAvailable: true }
    ],
    strengths: [
      { id: '6mg', level: 'Medium', nicotineContent: 6, isAvailable: true },
      { id: '9mg', level: 'Strong', nicotineContent: 9, isAvailable: true }
    ],
    inStock: true,
    featured: false,
    subscriptionAvailable: true,
    subscriptionDiscount: 15,
    tags: ['premium', 'vanilla', 'smooth'],
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: 'zylo-coffee-9mg',
    name: 'ZYLO Coffee Kick',
    slug: 'zylo-coffee-kick',
    description: 'Bold coffee flavor with espresso notes',
    shortDescription: 'Bold coffee blend',
    price: 26.99,
    images: [
      { id: '5', url: '/images/products/coffee-pack.jpg', alt: 'ZYLO Coffee Pack', isPrimary: true }
    ],
    category: { id: 'coffee', name: 'Coffee', slug: 'coffee' },
    flavors: [
      { id: 'coffee', name: 'Coffee', colorCode: '#795548', isAvailable: true }
    ],
    strengths: [
      { id: '6mg', level: 'Medium', nicotineContent: 6, isAvailable: true },
      { id: '9mg', level: 'Strong', nicotineContent: 9, isAvailable: true }
    ],
    inStock: true,
    featured: false,
    subscriptionAvailable: true,
    subscriptionDiscount: 15,
    tags: ['coffee', 'bold', 'energizing'],
    rating: 4.5,
    reviewCount: 78
  },
  {
    id: 'zylo-tropical-6mg',
    name: 'ZYLO Tropical Paradise',
    slug: 'zylo-tropical-paradise',
    description: 'Exotic tropical fruit medley',
    shortDescription: 'Tropical fruit blend',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    images: [
      { id: '6', url: '/images/products/tropical-pack.jpg', alt: 'ZYLO Tropical Pack', isPrimary: true }
    ],
    category: { id: 'tropical', name: 'Tropical', slug: 'tropical' },
    flavors: [
      { id: 'tropical', name: 'Tropical', colorCode: '#FF5722', isAvailable: true }
    ],
    strengths: [
      { id: '3mg', level: 'Light', nicotineContent: 3, isAvailable: true },
      { id: '6mg', level: 'Medium', nicotineContent: 6, isAvailable: true }
    ],
    inStock: true,
    featured: true,
    subscriptionAvailable: true,
    subscriptionDiscount: 15,
    tags: ['exotic', 'tropical', 'fruity'],
    rating: 4.6,
    reviewCount: 95
  }
]

interface ProductGridProps {
  featured?: boolean
  limit?: number
  category?: string
}

export default function ProductGrid({ featured = false, limit, category }: ProductGridProps) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  // Filter products based on props
  let filteredProducts = mockProducts
  
  if (featured) {
    filteredProducts = filteredProducts.filter(product => product.featured)
  }
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category.slug === category)
  }
  
  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit)
  }

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product)
  }

  const closeQuickView = () => {
    setQuickViewProduct(null)
  }

  return (
    <>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card-product">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-zylo rounded-zylo mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ZYLO</span>
                  </div>
                  <div className="text-sm font-medium text-gray-600">{product.name}</div>
                </div>
              </div>
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.discount && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
                {product.tags.includes('new') && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {product.tags.includes('bestseller') && (
                  <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </span>
                )}
              </div>
              
              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openQuickView(product)}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-zylo-teal hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Quick Add to Cart */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-zylo-teal text-white py-2 rounded-lg font-semibold hover:bg-zylo-teal-dark transition-colors">
                  Quick Add
                </button>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-4 space-y-3">
              {/* Category */}
              <div className="text-sm text-zylo-teal font-medium">
                {product.category.name}
              </div>
              
              {/* Product Name */}
              <h3 className="font-semibold text-zylo-dark text-lg leading-tight">
                <Link href={`#product-${product.slug}`} className="hover:text-zylo-teal transition-colors">
                  {product.name}
                </Link>
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.shortDescription}
              </p>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviewCount})</span>
                </div>
              )}
              
              {/* Flavor Options */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Flavors:</span>
                <div className="flex space-x-1">
                  {product.flavors.slice(0, 3).map((flavor) => (
                    <div
                      key={flavor.id}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: flavor.colorCode }}
                      title={flavor.name}
                    />
                  ))}
                  {product.flavors.length > 3 && (
                    <span className="text-xs text-gray-500">+{product.flavors.length - 3}</span>
                  )}
                </div>
              </div>
              
              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-zylo-dark">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                {product.subscriptionAvailable && (
                  <div className="text-xs text-zylo-teal font-medium">
                    Save {product.subscriptionDiscount}%
                  </div>
                )}
              </div>
              
              {/* Add to Cart Button */}
              <button className="w-full btn-primary text-sm py-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="modal-overlay" onClick={closeQuickView}>
          <div className="modal-content max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative p-6">
              {/* Close Button */}
              <button
                onClick={closeQuickView}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Quick View Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-zylo flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-zylo rounded-zylo mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">ZYLO</span>
                    </div>
                    <div className="text-lg font-medium text-gray-600">{quickViewProduct.name}</div>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-zylo-dark mb-2">
                      {quickViewProduct.name}
                    </h2>
                    <p className="text-gray-600">
                      {quickViewProduct.description}
                    </p>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-zylo-dark">
                      ${quickViewProduct.price}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${quickViewProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Strength Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nicotine Strength
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {quickViewProduct.strengths.map((strength) => (
                        <button
                          key={strength.id}
                          className="p-3 border rounded-lg text-center hover:border-zylo-teal hover:text-zylo-teal transition-colors"
                        >
                          <div className="font-semibold">{strength.level}</div>
                          <div className="text-sm text-gray-500">{strength.nicotineContent}mg</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center space-x-3">
                      <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50">
                        -
                      </button>
                      <span className="w-8 text-center">1</span>
                      <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-50">
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Add to Cart */}
                  <div className="space-y-3">
                    <button className="w-full btn-primary">
                      Add to Cart - ${quickViewProduct.price}
                    </button>
                    {quickViewProduct.subscriptionAvailable && (
                      <button className="w-full btn-secondary">
                        Subscribe & Save {quickViewProduct.subscriptionDiscount}%
                      </button>
                    )}
                  </div>
                  
                  {/* Product Features */}
                  <div className="border-t pt-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Tobacco-Free</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Discreet</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Premium Quality</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Long-Lasting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}