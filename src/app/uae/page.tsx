"use client";

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

// Note: This file uses "use client" but should be converted to server component for metadata
// For now, metadata needs to be in a separate file or layout
export default function UAEPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">IoT & Connectivity Solutions for UAE</h1>
            <p className="text-xl mb-4">Enterprise IoT, GRMS smart hotel systems, industrial networks, and secure data transmission across United Arab Emirates</p>
            <p className="text-lg text-red-100">Serving Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, and all Emirates</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold mb-6">Why TDME for UAE Businesses?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-700">Local Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Deep understanding of UAE hospitality market</li>
                  <li>✓ Experience with Emirate telecom regulations</li>
                  <li>✓ Support for major hotels and enterprises in Dubai, Abu Dhabi</li>
                  <li>✓ Compliance with local standards and certifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-700">Solutions Tailored for UAE</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ GRMS smart hotel systems for premium properties</li>
                  <li>✓ IoT monitoring for UAE industrial and oil & gas sectors</li>
                  <li>✓ High-security data transmission networks</li>
                  <li>✓ Motorola radio communications for security teams</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Solutions for UAE Market</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">🏨 Smart Hotel Systems (GRMS)</h3>
                <p className="text-gray-700 mb-4">Advanced room control, occupancy detection, and guest experience management for UAE hotels.</p>
                <Link href="/grms" className="text-red-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">🏭 Industrial IoT Connectivity</h3>
                <p className="text-gray-700 mb-4">Real-time monitoring for manufacturing, oil & gas, and utilities across UAE.</p>
                <Link href="/industrial" className="text-red-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">🔐 Security & Access Control</h3>
                <p className="text-gray-700 mb-4">Motorola radio communications, surveillance, and secure access systems for enterprises.</p>
                <Link href="/security" className="text-red-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">📱 Hospitality Phones & Systems</h3>
                <p className="text-gray-700 mb-4">Premium phone systems for hotels and premium establishments across Emirates.</p>
                <Link href="/bittel" className="text-red-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">🌐 Data Transmission Networks</h3>
                <p className="text-gray-700 mb-4">Carrier-grade connectivity for data centers and corporate networks in UAE.</p>
                <Link href="/data-transmission" className="text-red-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">💼 Consulting & Implementation</h3>
                <p className="text-gray-700 mb-4">Design, procurement, and turn-key installation across all Emirates.</p>
                <Link href="/services" className="text-red-700 font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Industries We Serve in UAE</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏨</div>
                <h3 className="text-xl font-bold mb-2">Hospitality & Hotels</h3>
                <p className="text-gray-300">5-star hotels, resorts, and hospitality groups across Dubai, Abu Dhabi, and other Emirates</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-2">Industrial & Manufacturing</h3>
                <p className="text-gray-300">Manufacturing plants, oil & gas operations, and industrial facilities</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-2">Enterprise & Corporate</h3>
                <p className="text-gray-300">Corporate offices, data centers, and large-scale enterprises</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Government & Security</h3>
                <p className="text-gray-300">Government agencies and security-critical installations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-red-700">Ready to Upgrade Your Connectivity in UAE?</h2>
          <p className="text-xl text-gray-700 mb-8">Contact our UAE team for a customized IoT and connectivity solution</p>
          <Link href="/contact" className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition inline-block">
            Get In Touch Today
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
