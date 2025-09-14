"use client"

import Navigation from "@/components/Navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const founders = [
    {
      name: "Museer",
      role: "Co-Founder & CEO",
      description: "Visionary leader with deep knowledge of Himalayan wellness traditions and modern business practices. Dedicated to bringing authentic Shilajeet to health-conscious consumers worldwide.",
      expertise: ["Business Strategy", "Product Development", "Market Research", "Customer Relations"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6bd45f35-ad29-4736-a877-1d5de17cb7a1.png"
    },
    {
      name: "Shoaib", 
      role: "Co-Founder & COO",
      description: "Operations expert committed to maintaining the highest quality standards and ensuring authentic sourcing from pristine Himalayan regions. Focuses on sustainable and ethical business practices.",
      expertise: ["Operations Management", "Quality Control", "Supply Chain", "Sustainability"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/000181fe-2b89-4564-bf4d-56e849cf36d8.png"
    }
  ]

  const companyValues = [
    {
      icon: "🏔️",
      title: "Authentic Sourcing",
      description: "Direct sourcing from high-altitude Himalayan regions ensures maximum purity and potency."
    },
    {
      icon: "🧪",
      title: "Quality Assurance", 
      description: "Rigorous testing and quality control processes guarantee premium product standards."
    },
    {
      icon: "🌱",
      title: "Natural Wellness",
      description: "Committed to providing natural, chemical-free products for holistic health benefits."
    },
    {
      icon: "🤝",
      title: "Customer Trust",
      description: "Building lasting relationships through transparency, reliability, and exceptional service."
    },
    {
      icon: "♻️",
      title: "Sustainability",
      description: "Environmentally responsible practices that protect the Himalayan ecosystem for future generations."
    },
    {
      icon: "🔬",
      title: "Scientific Approach",
      description: "Modern research combined with traditional knowledge to deliver effective wellness solutions."
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Museer and Shoaib established ShilaBoost with a vision to bring authentic Himalayan Shilajeet to health-conscious consumers."
    },
    {
      year: "2021", 
      title: "Direct Sourcing Partnership",
      description: "Established direct relationships with authentic Himalayan suppliers, ensuring premium quality and fair trade practices."
    },
    {
      year: "2022",
      title: "Quality Certification",
      description: "Achieved industry certifications for quality standards and implemented advanced testing procedures."
    },
    {
      year: "2023",
      title: "Product Range Expansion", 
      description: "Introduced multiple quantity options and enhanced packaging to meet diverse customer needs."
    },
    {
      year: "2024",
      title: "Digital Platform Launch",
      description: "Launched comprehensive e-commerce platform to provide seamless shopping experience and customer education."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                About ShilaBoost
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering authentic Himalayan wellness through premium Shilajeet products
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-6 rounded-xl border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">100%</h3>
                <p className="text-gray-300">Pure & Natural</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-6 rounded-xl border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">5000+</h3>
                <p className="text-gray-300">Satisfied Customers</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 p-6 rounded-xl border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">4+</h3>
                <p className="text-gray-300">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Story</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              ShilaBoost was born from a shared passion for authentic wellness and the incredible benefits of Himalayan Shilajeet. 
              Founded by Museer and Shoaib, our journey began with a simple mission: to make premium, authentic Shilajeet accessible 
              to health-conscious individuals worldwide while maintaining the highest standards of purity and quality.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-yellow-400/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-12 space-y-6">
                    <Badge className="bg-yellow-400 text-black">Our Mission</Badge>
                    <h3 className="text-3xl font-bold text-white">Authentic Wellness for Everyone</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We believe that everyone deserves access to pure, authentic wellness products. Our commitment goes beyond 
                      just selling Shilajeet – we're dedicated to educating our customers about its benefits and ensuring 
                      they receive only the finest quality products sourced directly from the pristine Himalayan mountains.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Direct sourcing from authentic Himalayan regions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Rigorous quality testing and certification</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Sustainable and ethical business practices</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative bg-gradient-to-br from-yellow-400/20 to-amber-500/20 p-8">
                    <img
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc5a21f8-56d9-42ee-ab4a-83fc209f6d52.png"
                      alt="Himalayan Mountain Range with Golden Sunrise and Natural Shilajeet Formation"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-yellow-400">Founders</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Driven by passion for wellness and commitment to excellence, our founders bring decades of combined 
              experience in business, operations, and natural health products.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={founder.image}
                        alt={`Professional Portrait of ${founder.name}`}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-3xl font-bold text-white mb-1">{founder.name}</h3>
                        <Badge className="bg-yellow-400 text-black">{founder.role}</Badge>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-6">
                      <p className="text-gray-400 leading-relaxed">{founder.description}</p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-yellow-400 mb-3">Areas of Expertise</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {founder.expertise.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Values</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do, from sourcing and quality control to customer service and community engagement.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 hover:border-yellow-400/60 hover:transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-6">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Journey</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in authentic Himalayan wellness products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-lg">{milestone.year}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-yellow-400/30">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Experience <span className="text-yellow-400">Premium Wellness?</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Join thousands of satisfied customers who trust ShilaBoost for their wellness journey.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl mb-3">📧</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-400">support@shilaboost.com</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">📞</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-400">+91 8888-999-000</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  We're here to help you achieve your wellness goals with authentic Himalayan Shilajeet.
                </p>
              </CardContent>
            </Card>
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
            <p className="mt-2">Founded by Museer & Shoaib with passion for natural wellness</p>
          </div>
        </div>
      </footer>
    </div>
  )
}