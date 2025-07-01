// Product Types
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription?: string
  price: number
  originalPrice?: number
  discount?: number
  images: ProductImage[]
  category: ProductCategory
  flavors: ProductFlavor[]
  strengths: ProductStrength[]
  inStock: boolean
  featured: boolean
  subscriptionAvailable: boolean
  subscriptionDiscount?: number
  tags: string[]
  rating?: number
  reviewCount?: number
  specifications?: ProductSpecification[]
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  isPrimary: boolean
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
}

export interface ProductFlavor {
  id: string
  name: string
  colorCode?: string
  isAvailable: boolean
}

export interface ProductStrength {
  id: string
  level: string // e.g., "Light", "Medium", "Strong"
  nicotineContent: number // mg
  isAvailable: boolean
}

export interface ProductSpecification {
  key: string
  value: string
}

// Cart Types
export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  selectedFlavor: ProductFlavor
  selectedStrength: ProductStrength
  isSubscription: boolean
  subscriptionFrequency?: SubscriptionFrequency
  unitPrice: number
  totalPrice: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  subtotal: number
  discount: number
  tax: number
  shipping: number
  total: number
}

// Subscription Types
export interface SubscriptionFrequency {
  id: string
  name: string
  value: number // days
  discount: number // percentage
}

export interface Subscription {
  id: string
  userId: string
  cartItems: CartItem[]
  frequency: SubscriptionFrequency
  nextDelivery: Date
  status: 'active' | 'paused' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  dateOfBirth?: Date
  phone?: string
  addresses: Address[]
  subscriptions: Subscription[]
  orders: Order[]
  preferences: UserPreferences
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  type: 'billing' | 'shipping'
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

export interface UserPreferences {
  marketing: boolean
  smsNotifications: boolean
  emailNotifications: boolean
  preferredFlavors: string[]
  preferredStrengths: string[]
}

// Order Types
export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  discount: number
  tax: number
  shipping: number
  total: number
  status: OrderStatus
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  trackingNumber?: string
  estimatedDelivery?: Date
  createdAt: Date
  updatedAt: Date
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface PaymentMethod {
  id: string
  type: 'card' | 'paypal' | 'apple_pay' | 'google_pay'
  last4?: string
  brand?: string
  expiryMonth?: number
  expiryYear?: number
}

// UI Types
export interface NavigationItem {
  id: string
  label: string
  href?: string
  children?: NavigationItem[]
  featured?: boolean
  image?: string
  description?: string
}

export interface Banner {
  id: string
  title: string
  subtitle?: string
  description?: string
  image: string
  mobileImage?: string
  cta?: {
    text: string
    href: string
  }
  isActive: boolean
  order: number
}

export interface Testimonial {
  id: string
  name: string
  location?: string
  rating: number
  comment: string
  avatar?: string
  isVerified: boolean
}

// Modal Types
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// Form Types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'password' | 'select' | 'textarea' | 'checkbox' | 'radio'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    min?: number
    max?: number
    pattern?: RegExp
    message?: string
  }
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  errors?: string[]
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Filter Types
export interface ProductFilters {
  category?: string[]
  flavor?: string[]
  strength?: string[]
  priceRange?: {
    min: number
    max: number
  }
  inStock?: boolean
  featured?: boolean
  search?: string
  sortBy?: 'name' | 'price' | 'rating' | 'newest'
  sortOrder?: 'asc' | 'desc'
}