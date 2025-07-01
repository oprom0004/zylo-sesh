import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import PromoSection from '@/components/PromoSection'
import SubscriptionCTA from '@/components/SubscriptionCTA'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Promotion Banner */}
        <PromoSection />
        
        {/* Featured Products */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-zylo-dark mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most popular nicotine pouches, carefully crafted for the ultimate experience.
              </p>
            </div>
            <ProductGrid featured={true} />
          </div>
        </section>
        
        {/* Subscription CTA */}
        <SubscriptionCTA />
        
        {/* All Products Preview */}
        <section className="py-12 lg:py-16 bg-zylo-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-zylo-dark mb-4">
                Shop All ZYLO Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our complete collection of premium tobacco-free nicotine pouches.
              </p>
            </div>
            <ProductGrid limit={8} />
            <div className="text-center mt-12">
              <a href="#shop" className="btn-primary text-lg">
                View All Products
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Why Choose ZYLO */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-zylo-dark mb-4">
                Why Choose ZYLO?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our premium tobacco-free nicotine pouches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center p-6 rounded-zylo bg-white shadow-zylo hover:shadow-zylo-hover transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-zylo rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zylo-dark mb-4">
                  100% Tobacco-Free
                </h3>
                <p className="text-gray-600">
                  Pure nicotine satisfaction without tobacco, smoke, or ash. Clean and discreet experience.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="text-center p-6 rounded-zylo bg-white shadow-zylo hover:shadow-zylo-hover transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-zylo rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zylo-dark mb-4">
                  Long-Lasting Flavor
                </h3>
                <p className="text-gray-600">
                  Premium flavors that last, delivering consistent satisfaction with every pouch.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="text-center p-6 rounded-zylo bg-white shadow-zylo hover:shadow-zylo-hover transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-zylo rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zylo-dark mb-4">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Carefully crafted with the finest ingredients for a superior nicotine experience.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="text-center p-6 rounded-zylo bg-white shadow-zylo hover:shadow-zylo-hover transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-zylo rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zylo-dark mb-4">
                  Discreet & Convenient
                </h3>
                <p className="text-gray-600">
                  Use anywhere, anytime. No smoke, no smell, just pure nicotine satisfaction.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="text-center p-6 rounded-zylo bg-white shadow-zylo hover:shadow-zylo-hover transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-zylo rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zylo-dark mb-4">
                  Multiple Strengths
                </h3>
                <p className="text-gray-600">
                  Choose from various nicotine strengths to find your perfect level of satisfaction.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="text-center p-6 rounded-zylo bg-white shadow-zylo hover:shadow-zylo-hover transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-zylo rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zylo-dark mb-4">
                  Subscription Savings
                </h3>
                <p className="text-gray-600">
                  Save money with our convenient subscription service and never run out.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}