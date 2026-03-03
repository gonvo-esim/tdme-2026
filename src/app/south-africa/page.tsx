"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SouthAfricaPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Enterprise IoT & Connectivity Solutions for South Africa</h1>
            <p className="text-xl mb-4">Industrial IoT, secure data networks, and hospitality solutions across South Africa</p>
            <p className="text-lg text-yellow-100">Serving Johannesburg, Cape Town, Durban, Pretoria, and all major South African cities</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold mb-6">Why TDME for South Africa?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">South African Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Deep experience with South African enterprises</li>
                  <li>✓ Solutions for Johannesburg, Cape Town, and all major metros</li>
                  <li>✓ Compliance with South African regulations and standards</li>
                  <li>✓ Support for leading industrial and hospitality sectors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">SA-Focused Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Industrial IoT for manufacturing and mining operations</li>
                  <li>✓ Secure data transmission networks</li>
                  <li>✓ Enterprise security and access control systems</li>
                  <li>✓ Smart hospitality and hotel management systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Solutions for South Africa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-700">
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">🏭 Industrial Connectivity</h3>
                <p className="text-gray-700 mb-4">IoT monitoring for mining, manufacturing, and industrial operations across South Africa.</p>
                <Link href="/industrial" className="text-yellow-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-700">
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">🌐 Data Transmission</h3>
                <p className="text-gray-700 mb-4">Carrier-grade networks for corporate and financial sector operations.</p>
                <Link href="/data-transmission" className="text-yellow-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-700">
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">🔐 Enterprise Security</h3>
                <p className="text-gray-700 mb-4">Access control, surveillance, and secure communications for enterprises.</p>
                <Link href="/security" className="text-yellow-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-700">
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">🏨 Hospitality Systems</h3>
                <p className="text-gray-700 mb-4">GRMS smart systems for luxury hotels and hospitality properties.</p>
                <Link href="/grms" className="text-yellow-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-700">
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">📱 Premium Phone Systems</h3>
                <p className="text-gray-700 mb-4">Hospitality phones and communication systems for hotels and businesses.</p>
                <Link href="/bittel" className="text-yellow-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-700">
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">💼 Design & Implementation</h3>
                <p className="text-gray-700 mb-4">Complete turn-key solutions tailored to your operations.</p>
                <Link href="/services" className="text-yellow-700 font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-yellow-700">Transform Your Enterprise in South Africa</h2>
          <p className="text-xl text-gray-700 mb-8">TDME delivers cutting-edge IoT and connectivity solutions for South African businesses</p>
          <Link href="/contact" className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition inline-block">
            Contact TDME South Africa
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
