"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EgyptPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Smart Hotel Systems & IoT for Egypt</h1>
            <p className="text-xl mb-4">Enterprise GRMS smart hotel technology, hospitality solutions, and industrial IoT across Egypt</p>
            <p className="text-lg text-blue-100">Serving Cairo, Alexandria, Giza, Luxor, and all major Egyptian cities</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold mb-6">Why TDME for Egyptian Hospitality?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Hospitality Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Deep experience with Egyptian hotel industry</li>
                  <li>✓ Solutions for Cairo, Nile cruises, and resort properties</li>
                  <li>✓ Compliance with Egyptian hospitality standards</li>
                  <li>✓ Support for luxury and boutique hotel operations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">Egypt-Focused Solutions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ GRMS smart room control systems</li>
                  <li>✓ Guest experience management platforms</li>
                  <li>✓ Industrial IoT for manufacturing and facilities</li>
                  <li>✓ Secure data networks for corporate enterprises</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Solutions for Egypt Market</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">🏨 GRMS Smart Hotels</h3>
                <p className="text-gray-700 mb-4">Complete smart room control, occupancy detection, and guest management for Egyptian hotels.</p>
                <Link href="/grms" className="text-blue-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">📱 Hospitality Phones</h3>
                <p className="text-gray-700 mb-4">Premium phone systems for guest rooms and hospitality centers.</p>
                <Link href="/bittel" className="text-blue-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">🏭 Industrial IoT</h3>
                <p className="text-gray-700 mb-4">Monitoring and control for Egyptian manufacturing and industrial operations.</p>
                <Link href="/industrial" className="text-blue-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">🔐 Security Systems</h3>
                <p className="text-gray-700 mb-4">Access control and surveillance for hotels and enterprises.</p>
                <Link href="/security" className="text-blue-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">🌐 Data Networks</h3>
                <p className="text-gray-700 mb-4">Carrier-grade data transmission for corporate networks.</p>
                <Link href="/data-transmission" className="text-blue-700 font-bold hover:underline">Learn More →</Link>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">💼 Implementation</h3>
                <p className="text-gray-700 mb-4">Design, installation, and support across Egypt.</p>
                <Link href="/services" className="text-blue-700 font-bold hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-700">Upgrade Your Hotel or Enterprise in Egypt</h2>
          <p className="text-xl text-gray-700 mb-8">Let TDME modernize your operations with cutting-edge smart systems</p>
          <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition inline-block">
            Contact TDME Egypt
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
