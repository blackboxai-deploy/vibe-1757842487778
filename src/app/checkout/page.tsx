"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

interface CheckoutForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  country: string
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India"
  })

  const [errors, setErrors] = useState<Partial<CheckoutForm>>({})

  const handleInputChange = (field: keyof CheckoutForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Partial<CheckoutForm> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit phone number required"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state.trim()) newErrors.state = "State is required"
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required"
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Valid 6-digit pincode required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Form is valid, proceed to payment
      console.log("Form submitted:", formData)
    }
  }

  const orderSummary = {
    items: [
      { name: "Premium Shilajeet 10gm", quantity: 2, price: 999 },
      { name: "Premium Shilajeet 20gm", quantity: 1, price: 1899 }
    ],
    subtotal: 3897,
    tax: 701,
    total: 4598
  }

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi"
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-400">Checkout</span>
          </h1>
          <p className="text-gray-400 text-lg">Enter your details to complete your order</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <span className="text-yellow-400 mr-2">👤</span>
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                          placeholder="Enter first name"
                        />
                        {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                          placeholder="Enter last name"
                        />
                        {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                        placeholder="Enter email address"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                        placeholder="10-digit phone number"
                        maxLength={10}
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <span className="text-yellow-400 mr-2">📍</span>
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address" className="text-gray-300">Full Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400 min-h-[80px]"
                        placeholder="House/Flat No., Street, Area, Landmark"
                      />
                      {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-gray-300">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                          placeholder="Enter city"
                        />
                        {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-gray-300">State *</Label>
                        <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                          <SelectTrigger className="bg-gray-800 border-yellow-400/50 text-white">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-yellow-400/50 max-h-60">
                            {indianStates.map((state) => (
                              <SelectItem key={state} value={state} className="text-white hover:bg-gray-700">
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.state && <p className="text-red-400 text-sm mt-1">{errors.state}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pincode" className="text-gray-300">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange("pincode", e.target.value)}
                          className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                          placeholder="6-digit pincode"
                          maxLength={6}
                        />
                        {errors.pincode && <p className="text-red-400 text-sm mt-1">{errors.pincode}</p>}
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-gray-300">Country</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          disabled
                          className="bg-gray-800 border-yellow-400/50 text-white"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Form Actions */}
                <div className="flex justify-between">
                  <Link href="/cart">
                    <Button variant="outline" className="border-yellow-400/50 text-white hover:bg-yellow-400 hover:text-black">
                      Back to Cart
                    </Button>
                  </Link>
                  <Link href="/payment">
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold px-8"
                    >
                      Continue to Payment
                    </Button>
                  </Link>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-yellow-400/30 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <span className="text-yellow-400 mr-2">📦</span>
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  {orderSummary.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                      <div>
                        <p className="text-white text-sm">{item.name}</p>
                        <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-yellow-400 font-semibold">₹{item.price * item.quantity}</p>
                    </div>
                  ))}

                  {/* Totals */}
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>₹{orderSummary.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Tax (18%)</span>
                      <span>₹{orderSummary.tax}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span className="text-green-400">Free</span>
                    </div>
                    <div className="border-t border-gray-700 pt-2">
                      <div className="flex justify-between text-xl font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-yellow-400">₹{orderSummary.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Security Info */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-lg border border-yellow-400/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-yellow-400">🔒</span>
                      <span className="text-white font-semibold text-sm">Secure Checkout</span>
                    </div>
                    <p className="text-gray-400 text-xs">Your information is encrypted and secure</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}