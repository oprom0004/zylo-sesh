import Link from 'next/link'

export default function PromoSection() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 6.5 15.5 8zM12 15.5l-3.5-2.5v-3L12 12.5l3.5-2.5v3L12 15.5z"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg">🔥 LIMITED TIME OFFER</div>
              <div className="text-sm opacity-90">Buy 2 Get 2 FREE on all ZYLO products</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm opacity-90">Offer ends in</div>
              <div className="font-bold">2 days 14:23:45</div>
            </div>
            <Link 
              href="#promo"
              className="bg-white text-red-600 font-bold py-2 px-6 rounded-zylo hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}