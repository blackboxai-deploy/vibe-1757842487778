"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Navigation() {
  const [cartItems, setCartItems] = useState(0)

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black border-b-2 border-yellow-400 shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="text-black font-bold text-xl">SB</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                ShilaBoost
              </h1>
              <p className="text-gray-400 text-sm">Premium Shilajeet</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/cart" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium relative">
              Cart
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs">
                  {cartItems}
                </Badge>
              )}
            </Link>
            <Link href="/checkout" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Checkout
            </Link>
            <Link href="/payment" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Payment
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white hover:bg-gray-800"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  )
}