'use client'

import { useState } from 'react'
import { Testimonial } from '@/types'

// Mock testimonials data
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    location: 'California, USA',
    rating: 5,
    comment: 'ZYLO pouches have completely replaced my smoking habit. The mint flavor is incredible and lasts for hours. Best decision I\'ve made!',
    isVerified: true
  },
  {
    id: '2',
    name: 'Emily Chen',
    location: 'New York, USA',
    rating: 5,
    comment: 'Love the convenience and discretion. I can use them anywhere without bothering others. The subscription service is perfect!',
    isVerified: true
  },
  {
    id: '3',
    name: 'Michael Thompson',
    location: 'Texas, USA',
    rating: 4,
    comment: 'Great quality and flavor variety. The citrus burst is my favorite. Fast shipping and excellent customer service.',
    isVerified: true
  },
  {
    id: '4',
    name: 'Jessica Parker',
    location: 'Florida, USA',
    rating: 5,
    comment: 'Finally found a tobacco-free alternative that actually satisfies. The berry fusion flavor is amazing. Highly recommend!',
    isVerified: true
  },
  {
    id: '5',
    name: 'David Kim',
    location: 'Washington, USA',
    rating: 5,
    comment: 'Been using ZYLO for 6 months now. Premium quality, consistent flavor, and the subscription saves me time and money.',
    isVerified: true
  },
  {
    id: '6',
    name: 'Amanda Wright',
    location: 'Colorado, USA',
    rating: 4,
    comment: 'Smooth transition from traditional products. The vanilla cream flavor is sophisticated and long-lasting.',
    isVerified: true
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Show 3 testimonials at a time on desktop, 1 on mobile
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  return (
    <section className="py-16 bg-zylo-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-zylo-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to ZYLO premium nicotine pouches.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-zylo-teal">50,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center text-2xl font-bold text-zylo-teal">
                4.8
                <svg className="w-6 h-6 text-yellow-400 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zylo-teal">95%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-zylo-teal hover:bg-zylo-teal hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-zylo-teal hover:bg-zylo-teal hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-zylo-dark flex items-center">
                      {testimonial.name}
                      {testimonial.isVerified && (
                        <svg className="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      )}
                    </div>
                    {testimonial.location && (
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    )}
                  </div>
                  
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-gradient-zylo rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-zylo-teal' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-zylo-dark mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the ZYLO difference today and see why thousands of customers trust us for their nicotine needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#shop"
                className="btn-primary text-lg px-8 py-3"
              >
                Shop ZYLO Products
              </a>
              <a
                href="#reviews"
                className="btn-outline text-lg px-8 py-3"
              >
                Read More Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}