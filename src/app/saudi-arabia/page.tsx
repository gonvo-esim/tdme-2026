"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SaudiArabiaPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">IoT & Industrial Solutions for Saudi Arabia</h1>
            <p className="text-xl mb-4">Enterprise connectivity for industrial IoT, oil & gas monitoring, and secure data networks across the Kingdom</p>
            <p className="text-lg text-green-100">Serving Riyadh, Jeddah, Dammam, Khobar, and all major cities</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold mb-6">Why TDME for Saudi Arabia?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-700">Expertise in KSA Market</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Experience with Saudi industrial and oil & gas sectors</li>
                  <li>✓ Support for Vision 2030 digital transformation initiatives</li>
                  <li>✓ Compliance with Saudi telecom regulations (CITC)</li>
                  <li>✓ Proven solutions for major enterprises and industrial facilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-700">Solutions for KSA Industries</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Oil & gas IoT monitoring and control systems</li>
                  <li>✓ Industrial connectivity for manufacturing and utilities</li>
                  <li>✓ Secure communications for security and operations</li>
                  <li>✓ Data transmission for corporate networks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Solutions for Saudi Arabia</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-green-700">
                <h3 className="text-2xl font-bold mb-4 text-green-700">⛽ Oil & Gas IoT</h3>
                <p className="text-gray-700 mb-4">Real-time monitoring for oil fields, refineries, and gas facilities with rugged, reliable connectivity.</p>
                <Link href="/industrial" className="text-green-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-green-700">
                <h3 className="text-2xl font-bold mb-4 text-green-700">🏭 Industrial Connectivity</h3>
                <p className="text-gray-700 mb-4">Connectivity solutions for manufacturing, utilities, and industrial operations across KSA.</p>
                <Link href="/industrial-applications" className="text-green-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-green-700">
                <h3 className="text-2xl font-bold mb-4 text-green-700">📡 Secure Communications</h3>
                <p className="text-gray-700 mb-4">Motorola radio systems and secure networks for industrial security teams.</p>
                <Link href="/security" className="text-green-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-green-700">
                <h3 className="text-2xl font-bold mb-4 text-green-700">🌐 Data Transmission</h3>
                <p className="text-gray-700 mb-4">Carrier-grade networks for corporate operations and data centers.</p>
                <Link href="/data-transmission" className="text-green-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-green-700">
                <h3 className="text-2xl font-bold mb-4 text-green-700">🏨 Hospitality Solutions</h3>
                <p className="text-gray-700 mb-4">Smart hotel systems and hospitality technology for premium properties.</p>
                <Link href="/grms" className="text-green-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-green-700">
                <h3 className="text-2xl font-bold mb-4 text-green-700">🛠️ Consulting & Design</h3>
                <p className="text-gray-700 mb-4">Complete design and implementation services for large-scale projects.</p>
                <Link href="/services" className="text-green-700 font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-700">Transform Your Operations in Saudi Arabia</h2>
          <p className="text-xl text-gray-700 mb-8">Contact our Saudi Arabia team for customized IoT solutions aligned with your business goals</p>
          <Link href="/contact" className="bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition inline-block">
            Contact TDME Saudi Arabia
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
