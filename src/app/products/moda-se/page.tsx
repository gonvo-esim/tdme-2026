import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MODA SE - Premium Guest Room Design | TDME",
  description: "MODA SE - New standard for guest room design. Premium speakerphone with wireless charging, alarm clock, and EasyClean Shield Technology.",
  keywords: "MODA SE, hotel phone, wireless charging, guest room, premium design",
  openGraph: {
    title: "MODA SE - Premium Guest Room Phone",
    description: "New standard for luxury hotel guestroom design",
    type: "website",
    url: "https://tdme.net/products/moda-se",
  },
};

export default function MODASEPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">MODA SE: New Standard for Guest Room Design</h1>
            <p className="text-xl">Premium aesthetic meets advanced functionality</p>
          </div>
        </section>

        {/* EasyClean Shield Technology */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">EasyClean Shield Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">DuraFace Premium Protection</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Premium acrylic protects faceplate and electronic surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Fast, easy cleaning with common cleaners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>No damage from aggressive cleaning protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Perfect for modern hospitality cleaning standards</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400 flex items-center justify-center">
                <Image
                  src="/images/bittel/moda-se.webp"
                  alt="MODA SE Premium Design"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Available Colors */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Available in Multiple Finishes</h2>
          <p className="text-center text-gray-700 mb-8 text-lg">Choose the perfect finish to complement your hotel's design aesthetic.</p>
          <div className="flex justify-center">
            <Image
              src="/images/bittel/moda-se.webp"
              alt="MODA SE Color Options"
              width={500}
              height={400}
              className="w-full max-w-2xl h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Core Features */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Premium Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Speakerphone/Charging Module */}
              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">📞 Speakerphone & Wireless Charging</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Qi wireless charging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>High-performance speakerphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Customized faceplate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>4 guest service keys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Message waiting indicator</span>
                  </li>
                </ul>
              </div>

              {/* Alarm Clock Module */}
              <div className="p-8 bg-slate-700 rounded-lg border border-pink-400">
                <h3 className="text-2xl font-bold mb-6 text-pink-300">⏰ Alarm Clock Module</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>TruTime ensures clock time is always correct</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Automatic Daylight Savings adjustment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Easy to use single day alarm (10-minute duration)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>IR Remote for clock and calendar adjustment</span>
                  </li>
                </ul>
              </div>

              {/* Handset */}
              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">☎️ Corded Handset</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Sleek, elegant design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>3 guest service keys</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Premium construction quality</span>
                  </li>
                </ul>
              </div>

              {/* Design */}
              <div className="p-8 bg-slate-700 rounded-lg border border-blue-400">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">🎨 Elegant Design</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Contemporary aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Complements modern room décor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Clean, uncluttered nightstand appearance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Beautiful Design Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-purple-700">Beautiful Design.</h2>
            <h3 className="text-4xl font-bold mb-6 text-purple-900">Clean Nightstand...</h3>
            <p className="text-2xl font-bold text-pink-600">PRICELESS</p>
            <p className="text-lg text-gray-700 mt-6">
              MODA SE brings together premium aesthetics and thoughtful functionality to create the perfect guest room centerpiece.
            </p>
          </div>
        </section>

        {/* Why Choose MODA SE */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Why Choose MODA SE</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="text-3xl mr-4">✨</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-700">Premium Design</h3>
                <p className="text-gray-700">Elevates the entire guest room environment with its sophisticated and elegant appearance.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-pink-600">
              <div className="text-3xl mr-4">🔌</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-pink-700">Wireless Charging Convenience</h3>
                <p className="text-gray-700">Qi-compatible charging removes the need for visible charging cables, maintaining the clean aesthetic.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="text-3xl mr-4">📱</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-cyan-700">Guest Experience</h3>
                <p className="text-gray-700">Combines reliable communication with convenient features that guests expect from luxury accommodations.</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="text-3xl mr-4">🧹</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-700">Easy Maintenance</h3>
                <p className="text-gray-700">EasyClean Shield Technology makes daily housekeeping cleaning simple and safe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Elevate Your Guest Rooms</h2>
          <p className="text-lg text-gray-700 mb-8">Experience the MODA SE difference with its perfect blend of premium design and advanced functionality.</p>
          <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
