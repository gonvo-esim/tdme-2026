import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "eSIMGEN - Embedded SIM Solutions | IoT Connectivity Platform",
  description: "eSIMGEN provides embedded SIM technology for IoT devices and mobile applications. Secure, scalable connectivity for enterprises worldwide with global coverage.",
  keywords: "eSIM, embedded SIM, IoT connectivity, mobile solutions, global coverage, SIM technology",
  openGraph: {
    title: "TDME eSIMGEN Solutions",
    description: "Embedded SIM technology for IoT and mobile applications",
    type: "website",
    url: "https://tdme.net/esim",
  },
};

export default function eSIMPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-400 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">eSIMGEN</h1>
            <p className="text-xl">Your Gateway to Global Travel - Stay Connected Anywhere</p>
          </div>
        </section>

        {/* Hero Image Section - Full Width */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-lg shadow-lg overflow-hidden border border-teal-200 bg-white">
              <Image
                src="/images/esim/hero_esim.webp"
                alt="eSIMGEN Hero Showcase"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Travel Connected Worldwide with esim-product */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <h2 className="text-3xl font-bold mb-6 text-teal-700">Travel Connected Worldwide</h2>
              <p className="text-lg text-gray-700 mb-6">
                eSIMGEN makes global travel effortless. Experience seamless connectivity across 190+ countries with a single digital eSIM. No physical cards, no complicated setup—just pure travel freedom.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Why Choose eSIMGEN</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span><strong>Global Connectivity:</strong> Travel the world with a single eSIM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span><strong>Easy Top-up:</strong> Instant data purchase from your phone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span><strong>Affordable Rates:</strong> Better prices than roaming charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span><strong>No Physical SIM:</strong> Digital activation, instant access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">✓</span>
                  <span><strong>Multi-Device Support:</strong> Phones, tablets, smartwatches</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/esim/esim-product.webp"
                alt="eSIM Product"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Perfect For Travelers */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-teal-700">Perfect For Travelers & Adventurers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border-l-4 border-teal-500 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-teal-700">✈️ Frequent Travelers</h3>
                <p className="text-gray-700">Stay connected across continents without expensive roaming charges. Switch networks automatically in every country.</p>
              </div>
              <div className="p-8 border-l-4 border-orange-400 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-700">🏖️ Holiday & Leisure</h3>
                <p className="text-gray-700">Share your adventures instantly. Social media, messaging, navigation—all seamless wherever your journey takes you.</p>
              </div>
              <div className="p-8 border-l-4 border-cyan-400 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-cyan-700">💼 Remote Workers</h3>
                <p className="text-gray-700">Maintain reliable connectivity for work emails and video calls. Stay productive from coffee shops to mountain peaks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage & Features */}
        <section className="bg-gradient-to-r from-teal-50 to-orange-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">Worldwide Coverage</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              eSIMGEN provides seamless coverage in 190+ countries and territories. Automatically connect to the best local network in every destination.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-teal-700 mb-4 text-lg">Coverage Regions</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• 🌎 North & Central America</p>
                  <p>• 🌎 South America</p>
                  <p>• 🌍 Europe (all countries)</p>
                  <p>• 🌏 Asia Pacific region</p>
                  <p>• 🌍 Middle East</p>
                  <p>• 🌍 Africa</p>
                  <p>• 🏝️ Caribbean & Islands</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/esim/wold-map-esim-placeholder-section.webp"
                  alt="Global Coverage Map"
                  width={500}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
