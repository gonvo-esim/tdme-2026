"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function KenyaPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">IoT & Security Solutions for Kenya</h1>
            <p className="text-xl mb-4">Enterprise connectivity for industrial IoT, security systems, and hospitality across Kenya</p>
            <p className="text-lg text-orange-100">Serving Nairobi, Mombasa, Kisumu, Nakuru, and all major Kenyan cities</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold mb-6">Why TDME for Kenya?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-700">Kenya Market Knowledge</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Experience with East African business environment</li>
                  <li>✓ Support for Nairobi enterprises and hospitality sector</li>
                  <li>✓ Compliance with Kenyan and East African regulations</li>
                  <li>✓ Solutions for growing Kenyan industrial sector</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-700">Kenya-Specific Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Industrial IoT monitoring for Kenyan industries</li>
                  <li>✓ Security systems for hotels and enterprises</li>
                  <li>✓ Smart hotel management systems</li>
                  <li>✓ Secure communications for operations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Solutions for Kenya</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-orange-700">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">🔐 Security Systems</h3>
                <p className="text-gray-700 mb-4">Access control, surveillance, and Motorola radio systems for Kenyan enterprises and hotels.</p>
                <Link href="/security" className="text-orange-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-orange-700">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">🏨 Hotel Solutions</h3>
                <p className="text-gray-700 mb-4">GRMS smart systems and premium hospitality technology for Nairobi and East African hotels.</p>
                <Link href="/grms" className="text-orange-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-orange-700">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">🏭 Industrial IoT</h3>
                <p className="text-gray-700 mb-4">Monitoring and connectivity for Kenyan manufacturing and industrial operations.</p>
                <Link href="/industrial" className="text-orange-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-orange-700">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">🌐 Data Transmission</h3>
                <p className="text-gray-700 mb-4">Reliable networks for corporate operations and data centers.</p>
                <Link href="/data-transmission" className="text-orange-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-orange-700">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">📱 Hospitality Phones</h3>
                <p className="text-gray-700 mb-4">Premium phone systems for hotels and business centers.</p>
                <Link href="/bittel" className="text-orange-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-orange-700">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">🛠️ Professional Services</h3>
                <p className="text-gray-700 mb-4">Design, implementation, and ongoing support for your needs.</p>
                <Link href="/services" className="text-orange-700 font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-orange-700">Modernize Your Operations in Kenya</h2>
          <p className="text-xl text-gray-700 mb-8">Partner with TDME for secure, reliable IoT and connectivity solutions</p>
          <Link href="/contact" className="bg-gradient-to-r from-orange-600 to-orange-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition inline-block">
            Contact TDME Kenya
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
