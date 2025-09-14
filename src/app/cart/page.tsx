"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CartItem {
  id: string
  name: string
  quantity: string
  price: number
  amount: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Shilajeet",
      quantity: "10gm",
      price: 999,
      amount: 2,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/573f0d6a-f82a-462f-9ed1-8e6307e7eff7.png"
    },
    {
      id: "2", 
      name: "Premium Shilajeet",
      quantity: "20gm",
      price: 1899,
      amount: 1,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20813735-9e97-4f50-aa0d-6d21f759b607.png"
    }
  ])

  const updateQuantity = (id: string, newAmount: number) => {
    if (newAmount === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, amount: newAmount } : item
      ))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.amount), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shopping <span className="text-yellow-400">Cart</span>
          </h1>
          <p className="text-gray-400 text-lg">Review your selected products</p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-black text-3xl">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Your cart is empty</h3>
                <p className="text-gray-400">Add some premium Shilajeet to get started!</p>
              </div>
              <Link href="/">
                <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <span className="text-yellow-400 mr-2">📦</span>
                      Cart Items ({getTotalItems()})
                    </h3>
                    
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
                          <div className="flex items-center space-x-4">
                            {/* Product Image */}
                            <div className="relative">
                              <img
                                src={item.image}
                                alt={`${item.name} ${item.quantity}`}
                                className="w-20 h-20 rounded-lg bg-gradient-to-br from-yellow-400/20 to-amber-500/20 p-2"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent rounded-lg"></div>
                            </div>

                            {/* Product Details */}
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                              <div className="flex items-center space-x-3 mt-1">
                                <Badge className="bg-yellow-400 text-black">{item.quantity}</Badge>
                                <span className="text-gray-400">₹{item.price} each</span>
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.amount - 1)}
                                className="w-8 h-8 p-0 border-yellow-400/50 text-white hover:bg-yellow-400 hover:text-black"
                              >
                                -
                              </Button>
                              <span className="text-white font-semibold w-8 text-center">{item.amount}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.amount + 1)}
                                className="w-8 h-8 p-0 border-yellow-400/50 text-white hover:bg-yellow-400 hover:text-black"
                              >
                                +
                              </Button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div className="text-xl font-bold text-yellow-400">
                                ₹{item.price * item.amount}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-400/10 mt-1"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-yellow-400/30 sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <span className="text-yellow-400 mr-2">💰</span>
                      Order Summary
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between text-gray-300">
                        <span>Subtotal ({getTotalItems()} items)</span>
                        <span>₹{getTotalPrice()}</span>
                      </div>
                      
                      <div className="flex justify-between text-gray-300">
                        <span>Shipping</span>
                        <span className="text-green-400">Free</span>
                      </div>
                      
                      <div className="flex justify-between text-gray-300">
                        <span>Tax</span>
                        <span>₹{Math.round(getTotalPrice() * 0.18)}</span>
                      </div>
                      
                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex justify-between text-xl font-bold">
                          <span className="text-white">Total</span>
                          <span className="text-yellow-400">₹{getTotalPrice() + Math.round(getTotalPrice() * 0.18)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      <Link href="/checkout" className="block">
                        <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold py-3">
                          Proceed to Checkout
                        </Button>
                      </Link>
                      
                      <Link href="/" className="block">
                        <Button variant="outline" className="w-full border-yellow-400/50 text-white hover:bg-yellow-400 hover:text-black">
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-yellow-400 mb-1">🔒</div>
                          <span className="text-xs text-gray-400">Secure Payment</span>
                        </div>
                        <div>
                          <div className="text-yellow-400 mb-1">🚚</div>
                          <span className="text-xs text-gray-400">Free Shipping</span>
                        </div>
                        <div>
                          <div className="text-yellow-400 mb-1">✅</div>
                          <span className="text-xs text-gray-400">Authentic Product</span>
                        </div>
                        <div>
                          <div className="text-yellow-400 mb-1">📞</div>
                          <span className="text-xs text-gray-400">24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}