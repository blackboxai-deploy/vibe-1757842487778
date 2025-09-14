"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomePage() {
  const [selectedQuantity, setSelectedQuantity] = useState<string>("10gm")
  const [addedToCart, setAddedToCart] = useState(false)

  const productData = {
    name: "Premium Shilajeet",
    description: "Pure Himalayan Shilajeet extract for enhanced vitality, energy, and overall wellness. Sourced directly from high-altitude regions.",
    price: {
      "10gm": 999,
      "20gm": 1899
    },
    benefits: [
      "Boosts Energy & Stamina",
      "Enhances Mental Clarity",
      "Supports Immune System",
      "Rich in Minerals & Fulvic Acid"
    ]
  }

  const reviews = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent quality! Noticed increased energy levels within a week."
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Authentic product. Great results for overall wellness."
    },
    {
      name: "Mohamed Ali",
      rating: 5,
      comment: "Premium quality Shilajeet. Highly recommended!"
    }
  ]

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                ShilaBoost
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">Premium Himalayan Shilajeet</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Unlock the power of ancient wellness with our pure, authentic Shilajeet extract. 
              Boost your energy, enhance mental clarity, and elevate your vitality naturally.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-1 rounded-full">
                <div className="bg-black px-6 py-3 rounded-full">
                  <span className="text-yellow-400 font-semibold">✨ 100% Pure & Natural</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-1 rounded-full">
                <div className="bg-black px-6 py-3 rounded-full">
                  <span className="text-yellow-400 font-semibold">🏔️ Himalayan Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Premium <span className="text-yellow-400">Products</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the finest quality Shilajeet, carefully processed and packaged to preserve all natural benefits.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-yellow-400/30 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="relative">
                {/* Golden Sparkle Effects */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-amber-500 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-8 left-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-700"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-1000"></div>
                </div>
                
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Product Image */}
                    <div className="relative">
                      <div className="relative bg-gradient-to-br from-yellow-400/20 to-amber-500/20 p-8 rounded-2xl">
                        <img
                          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6964c931-b152-4830-9836-fd1c59f23a70.png"
                          alt="Premium Shilajeet Container with Golden Accents and Himalayan Backdrop"
                          className="w-full h-auto rounded-xl shadow-2xl transform hover:rotate-2 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent rounded-2xl"></div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                      <div>
                        <Badge className="bg-yellow-400 text-black mb-3">Premium Quality</Badge>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {productData.name}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                          {productData.description}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-3">Key Benefits:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {productData.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quantity Selection */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white">Select Quantity:</h4>
                        <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
                          <SelectTrigger className="bg-gray-800 border-yellow-400/50 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-yellow-400/50">
                            <SelectItem value="10gm" className="text-white hover:bg-gray-700">
                              10gm - ₹{productData.price["10gm"]}
                            </SelectItem>
                            <SelectItem value="20gm" className="text-white hover:bg-gray-700">
                              20gm - ₹{productData.price["20gm"]} (Save ₹101!)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Price and Add to Cart */}
                      <div className="space-y-4">
                        <div className="text-center">
                          <span className="text-4xl font-bold text-yellow-400">
                            ₹{productData.price[selectedQuantity as keyof typeof productData.price]}
                          </span>
                          <span className="text-gray-400 ml-2">/ {selectedQuantity}</span>
                        </div>
                        
                        <Button
                          onClick={handleAddToCart}
                          className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                            addedToCart
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black"
                          }`}
                        >
                          {addedToCart ? "✅ Added to Cart!" : "Add to Cart"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Customer <span className="text-yellow-400">Reviews</span>
            </h2>
            <p className="text-gray-400 text-lg">What our customers say about ShilaBoost</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                  </div>
                  <p className="text-gray-300 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400/30 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">
              ShilaBoost
            </h3>
            <p className="text-gray-400">Premium Himalayan Shilajeet for Your Wellness</p>
          </div>
          <div className="text-gray-500">
            <p>&copy; 2024 ShilaBoost. All rights reserved.</p>
            <p className="mt-2">Founded with passion for natural wellness</p>
          </div>
        </div>
      </footer>
    </div>
  )
}