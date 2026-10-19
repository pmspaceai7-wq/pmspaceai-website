"use client";

import { useState } from "react";
import { 
  platformFeatures, 
  featureCategories, 
  platformStats, 
  testimonials, 
  pricingPlans, 
  faqs,
  getFeaturesByCategory 
} from "@/sections/dummyData";

export default function PlatformFeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("ai-analytics");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
            Platform Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover the comprehensive suite of AI-powered tools that revolutionize construction management
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {Object.entries(platformStats).slice(0, 4).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{value}</div>
                <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {featureCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        {featureCategories.map((category) => (
          activeCategory === category.id && (
            <div key={category.id} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">{category.description}</p>
            </div>
          )
        ))}
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFeaturesByCategory(activeCategory).map((feature) => (
            <div key={feature.id} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              
              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-blue-400">Key Benefits:</h4>
                <ul className="space-y-1">
                  {feature.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
                <div>Accuracy: {feature.specifications.accuracy}</div>
                <div>Processing: {feature.specifications.processing}</div>
              </div>

              {feature.pricing && (
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <span className="text-sm text-gray-400">{feature.pricing.tier}</span>
                  <span className="font-bold text-blue-400">{feature.pricing.price}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                  <div className="text-sm text-blue-400">{testimonial.company}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">&quot;{testimonial.content}&quot;</p>
              <div className="text-sm text-gray-500">{testimonial.projectSize}</div>
            </div>
          ))}
        </div>
   
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your construction management needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-gray-900 rounded-xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-green-400">Included Features:</h4>
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.length > 0 && (
                  <>
                    <h4 className="font-semibold text-red-400 mt-6">Limitations:</h4>
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <span className="text-red-400 mr-3">✗</span>
                        <span>{limitation}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about our platform features
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-900 rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className={`transform transition-transform ${
                  activeFaq === faq.id ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {activeFaq === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Construction Management?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of construction professionals who trust Space AI to deliver projects on time and under budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>

      {/* Stats Footer */}
      <section className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Object.entries(platformStats).map(([key, value]) => (
            <div key={key}>
              <div className="text-3xl font-bold text-blue-400 mb-2">{value}</div>
              <div className="text-gray-400 capitalize text-sm">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
