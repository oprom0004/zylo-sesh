import Link from 'next/link'

export default function SubscriptionCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-zylo-teal to-zylo-teal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ZYLO+ SUBSCRIPTION
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Never Run Out Again
            </h2>
            
            <p className="text-xl text-gray-100 leading-relaxed">
              Join ZYLO+ and save 15% on every order. Customize your delivery schedule, 
              skip or cancel anytime, and always have your favorite pouches on hand.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-zylo-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Save 15% on every order</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-zylo-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Free shipping on all orders</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-zylo-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Flexible delivery schedule</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-zylo-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Skip or cancel anytime</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#subscription"
                className="bg-white text-zylo-teal font-semibold py-4 px-8 rounded-zylo hover:bg-gray-100 transition-colors text-center text-lg"
              >
                Start Your Subscription
              </Link>
              <Link
                href="#zylo-plus"
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-zylo hover:bg-white hover:text-zylo-teal transition-colors text-center text-lg"
              >
                Learn More About ZYLO+
              </Link>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            {/* Subscription Box Illustration */}
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-zylo rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-zylo-dark mb-2">
                    Monthly ZYLO Box
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Delivered right to your door
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Regular Price:</span>
                      <span className="text-gray-500 line-through">$99.96</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-zylo-dark">ZYLO+ Price:</span>
                      <span className="font-bold text-2xl text-zylo-teal">$84.97</span>
                    </div>
                    <div className="text-center text-sm text-green-600 font-medium">
                      You save $14.99 every month!
                    </div>
                  </div>
                </div>
                
                {/* Sample Products */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zylo-gray rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-green-400 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-medium">Mint</div>
                  </div>
                  <div className="bg-zylo-gray rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-medium">Citrus</div>
                  </div>
                  <div className="bg-zylo-gray rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-pink-400 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-medium">Berry</div>
                  </div>
                  <div className="bg-zylo-gray rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-medium">Vanilla</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white bg-opacity-20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-lg text-white italic mb-4">
              "ZYLO+ has been a game-changer. Never running out of my favorite pouches, 
              and the savings add up quickly. The convenience is unmatched!"
            </p>
            <div className="text-white font-medium">
              Sarah M. - ZYLO+ Member since 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}