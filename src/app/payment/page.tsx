"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface PaymentForm {
  method: string
  cardNumber: string
  expiryDate: string
  cvv: string
  cardName: string
  upiId: string
}

export default function PaymentPage() {
  const [paymentData, setPaymentData] = useState<PaymentForm>({
    method: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    upiId: ""
  })

  const [errors, setErrors] = useState<Partial<PaymentForm>>({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const handleInputChange = (field: keyof PaymentForm, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validateCardForm = () => {
    const newErrors: Partial<PaymentForm> = {}

    if (!paymentData.cardNumber.trim()) newErrors.cardNumber = "Card number is required"
    else if (!/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(paymentData.cardNumber.replace(/\s/g, ""))) 
      newErrors.cardNumber = "Valid 16-digit card number required"
    
    if (!paymentData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required"
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentData.expiryDate)) 
      newErrors.expiryDate = "Valid MM/YY format required"
    
    if (!paymentData.cvv.trim()) newErrors.cvv = "CVV is required"
    else if (!/^\d{3,4}$/.test(paymentData.cvv)) newErrors.cvv = "Valid 3-4 digit CVV required"
    
    if (!paymentData.cardName.trim()) newErrors.cardName = "Cardholder name is required"

    return newErrors
  }

  const validateUpiForm = () => {
    const newErrors: Partial<PaymentForm> = {}

    if (!paymentData.upiId.trim()) newErrors.upiId = "UPI ID is required"
    else if (!/^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}$/.test(paymentData.upiId)) 
      newErrors.upiId = "Valid UPI ID required (e.g., user@paytm)"

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors = paymentData.method === "card" ? validateCardForm() : validateUpiForm()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsProcessing(true)
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false)
        setPaymentComplete(true)
      }, 3000)
    }
  }

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const groups = cleaned.match(/\d{1,4}/g)
    return groups ? groups.join(' ').slice(0, 19) : cleaned
  }

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D+/g, '')
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4)
    }
    return cleaned
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

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="container mx-auto px-6 py-12">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/50 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
                  <span className="text-black text-4xl">✅</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Payment Successful!</h2>
                <p className="text-gray-400 mb-4">Thank you for your order. We'll process it shortly.</p>
                <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-4 rounded-lg mb-6">
                  <p className="text-yellow-400 font-semibold">Order ID: #SB{Date.now()}</p>
                  <p className="text-white">Total Paid: ₹{orderSummary.total}</p>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold">
                    Continue Shopping
                  </Button>
                </Link>
                <p className="text-gray-400 text-sm">A confirmation email has been sent to your registered email address.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-400">Payment</span>
          </h1>
          <p className="text-gray-400 text-lg">Complete your secure payment</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Payment Method Selection */}
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <span className="text-yellow-400 mr-2">💳</span>
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={paymentData.method}
                      onValueChange={(value) => handleInputChange("method", value)}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all">
                        <RadioGroupItem value="card" id="card" className="border-yellow-400 text-yellow-400" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-medium">Credit/Debit Card</p>
                              <p className="text-gray-400 text-sm">Visa, Mastercard, RuPay</p>
                            </div>
                            <div className="flex space-x-2">
                              <Badge variant="secondary" className="bg-blue-600 text-white">VISA</Badge>
                              <Badge variant="secondary" className="bg-red-600 text-white">MC</Badge>
                            </div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-yellow-400/50 transition-all">
                        <RadioGroupItem value="upi" id="upi" className="border-yellow-400 text-yellow-400" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-medium">UPI Payment</p>
                              <p className="text-gray-400 text-sm">PhonePe, Google Pay, Paytm</p>
                            </div>
                            <div className="flex space-x-2">
                              <Badge variant="secondary" className="bg-purple-600 text-white">UPI</Badge>
                            </div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 opacity-60">
                        <RadioGroupItem value="cod" id="cod" disabled className="border-gray-600" />
                        <Label htmlFor="cod" className="flex-1 cursor-not-allowed">
                          <div>
                            <p className="text-gray-500 font-medium">Cash on Delivery</p>
                            <p className="text-gray-600 text-sm">Currently unavailable</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Payment Details */}
                {paymentData.method === "card" && (
                  <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <span className="text-yellow-400 mr-2">🔒</span>
                        Card Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber" className="text-gray-300">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", formatCardNumber(e.target.value))}
                          className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                        {errors.cardNumber && <p className="text-red-400 text-sm mt-1">{errors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate" className="text-gray-300">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", formatExpiryDate(e.target.value))}
                            className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                          {errors.expiryDate && <p className="text-red-400 text-sm mt-1">{errors.expiryDate}</p>}
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-gray-300">CVV *</Label>
                          <Input
                            id="cvv"
                            type="password"
                            value={paymentData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value.replace(/\D/g, ""))}
                            className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                            placeholder="123"
                            maxLength={4}
                          />
                          {errors.cvv && <p className="text-red-400 text-sm mt-1">{errors.cvv}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="cardName" className="text-gray-300">Cardholder Name *</Label>
                        <Input
                          id="cardName"
                          value={paymentData.cardName}
                          onChange={(e) => handleInputChange("cardName", e.target.value.toUpperCase())}
                          className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                          placeholder="JOHN DOE"
                        />
                        {errors.cardName && <p className="text-red-400 text-sm mt-1">{errors.cardName}</p>}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {paymentData.method === "upi" && (
                  <Card className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <span className="text-yellow-400 mr-2">📱</span>
                        UPI Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Label htmlFor="upiId" className="text-gray-300">UPI ID *</Label>
                        <Input
                          id="upiId"
                          value={paymentData.upiId}
                          onChange={(e) => handleInputChange("upiId", e.target.value.toLowerCase())}
                          className="bg-gray-800 border-yellow-400/50 text-white placeholder-gray-400"
                          placeholder="yourname@paytm"
                        />
                        {errors.upiId && <p className="text-red-400 text-sm mt-1">{errors.upiId}</p>}
                        <p className="text-gray-400 text-xs mt-1">Enter your UPI ID (e.g., 9876543210@paytm)</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Form Actions */}
                <div className="flex justify-between">
                  <Link href="/checkout">
                    <Button variant="outline" className="border-yellow-400/50 text-white hover:bg-yellow-400 hover:text-black">
                      Back to Checkout
                    </Button>
                  </Link>
                  <Button 
                    type="submit"
                    disabled={isProcessing}
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold px-8 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      `Pay ₹${orderSummary.total}`
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-yellow-400/30 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <span className="text-yellow-400 mr-2">📦</span>
                    Payment Summary
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
                        <span className="text-white">Total to Pay</span>
                        <span className="text-yellow-400">₹{orderSummary.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Security Badges */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">🔒</span>
                        <span className="text-white text-sm">SSL Encrypted</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-400">🛡️</span>
                        <span className="text-white text-sm">Secure Payment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400">⚡</span>
                        <span className="text-white text-sm">Instant Processing</span>
                      </div>
                    </div>
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