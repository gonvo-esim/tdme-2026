import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bittel Hotel Communication Systems | TDME Hospitality Solutions",
  description: "Bittel premium telephone systems and smart devices for hotel guestrooms, bathrooms, and business centers. Advanced hospitality communication technology.",
  keywords: "Bittel, hotel phones, hospitality systems, room communication, hotel technology, guest communication",
  openGraph: {
    title: "TDME Bittel Solutions",
    description: "Premium hotel communication systems by Bittel",
    type: "website",
    url: "https://tdme.net/bittel",
  },
};

export default function BittelPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
         {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Bittel Intelligent: Hospitality Telephones</h1>
            <p className="text-xl">Innovative smart solutions for the modern hotel guestroom</p>
          </div>
        </section>



        {/* Product Categories */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400">Product Categories</h2>
            
            <div className="space-y-12">
              {/* All-in-One */}
              <div className="border-l-4 border-cyan-400 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">🎯 All-in-One Solutions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-700 rounded-lg border border-cyan-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-cyan-300">
                        <Image
                          src="/images/bittel/unomedia5-series.webp"
                          alt="UNOMedia 5 Series"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-cyan-300">UNOMedia 5 Series</h4>
                        <p className="text-gray-300">Complete integration of media, charging, and communication in one elegant device. Perfect for modern hotel rooms requiring space efficiency and advanced features.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotel & Business Phones */}
              <div className="border-l-4 border-blue-400 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">📞 Hotel & Business Phones</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-700 rounded-lg border border-blue-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-blue-300">
                        <Image
                          src="/images/bittel/business-phone.webp"
                          alt="Business Phones"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-blue-300">Business Phones</h4>
                        <p className="text-gray-300">Professional telephone systems designed for business hotels and corporate environments. Crystal-clear audio and advanced calling features.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700 rounded-lg border border-blue-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-blue-300">
                        <Image
                          src="/images/bittel/bathroom-slim-jacobjensen-ht20.webp"
                          alt="Bathroom Phones"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-blue-300">Bathroom Phones</h4>
                        <p className="text-gray-300">Waterproof and durable phones for bathroom installations. Ensures guest convenience without compromising on style or functionality.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700 rounded-lg border border-blue-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-blue-300">
                        <Image
                          src="/images/bittel/uno-wall-mount7713.webp"
                          alt="Wall Phones"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-blue-300">Wall Phones</h4>
                        <p className="text-gray-300">Space-saving wall-mounted solutions for compact rooms. Modern design that complements contemporary hotel décor.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700 rounded-lg border border-blue-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-blue-300">
                        <Image
                          src="/images/bittel/desktop-jacobjensen-ht60.webp"
                          alt="Jacob Jensen Products"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-blue-300">Jacob Jensen Products</h4>
                        <p className="text-gray-300">Premium telephone systems from the renowned Jacob Jensen brand. Scandinavian-inspired design with exceptional reliability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MODA Series */}
              <div className="border-l-4 border-purple-400 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">✨ MODA Series</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-700 rounded-lg border border-purple-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-purple-300">
                        <Image
                          src="/images/bittel/moda-series.webp"
                          alt="ModaMedia"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">ModaMedia</h4>
                        <p className="text-gray-300">Advanced media center with integrated charging and streaming capabilities. Perfect for tech-savvy travelers who demand premium functionality.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700 rounded-lg border border-purple-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-purple-300">
                        <Image
                          src="/images/bittel/moda-se.webp"
                          alt="MODA SE"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-purple-300">MODA SE</h4>
                        <p className="text-gray-300">Enhanced version featuring premium audio, wireless casting, and rapid charging technology. The pinnacle of guest entertainment solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEO Series */}
              <div className="border-l-4 border-teal-400 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-teal-300">🔧 NEO Series</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-700 rounded-lg border border-teal-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-teal-300">
                        <Image
                          src="/images/bittel/neo-corded.webp"
                          alt="NEO Analog & SIP"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-teal-300">NEO Analog & SIP</h4>
                        <p className="text-gray-300">Versatile communication solution supporting both analog and SIP protocols. Flexible deployment across various hotel communication infrastructures.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700 rounded-lg border border-teal-400">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-teal-300">
                        <Image
                          src="/images/bittel/neo-series.webp"
                          alt="NEO DECT"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-teal-300">NEO DECT</h4>
                        <p className="text-gray-300">Wireless communication solution using DECT technology. Superior range and reliability for cordless guest room communication.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Product Image Section 2 */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Premium Features</h2>
          <div className="rounded-lg shadow-lg overflow-hidden border-2 border-cyan-300 bg-white">
            <Image
              src="/images/bittel/product_revers_handset.webp"
              alt="Bittel Hotel Room Installation & Handset"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Product Image Section 1 */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Bittel Hotel Phone Range</h2>
          <div className="rounded-lg shadow-lg overflow-hidden border-2 border-teal-300 bg-white">
            <Image
              src="/images/bittel/product-bittel.webp"
              alt="Bittel Smart Hotel Devices Showcase"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gradient-to-r from-teal-50 to-cyan-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-teal-700">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-teal-700">🔌 Mobile Charging</h3>
                <p className="text-gray-700">Fast charging technology for multiple devices simultaneously. Supports all major phone and tablet charging standards.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-teal-700">📺 Wireless Casting</h3>
                <p className="text-gray-700">AirPlay and Miracast support for seamless content sharing from guest devices to room displays.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-cyan-700">📞 Premium Calling</h3>
                <p className="text-gray-700">Crystal-clear audio quality with noise reduction technology. Superior calling experience for business guests.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-cyan-700">🎬 Streaming Services</h3>
                <p className="text-gray-700">Integrated streaming with support for Netflix, YouTube, and other platforms. Entertainment at guests' fingertips.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-teal-700">🏗️ Reliable Construction</h3>
                <p className="text-gray-700">Heavy-duty materials and engineering for long-term durability in hotel environments.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-cyan-700">🎨 Elegant Design</h3>
                <p className="text-gray-700">Contemporary aesthetic that complements modern hotel room décor. Available in multiple colors and finishes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Deployment */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-teal-700">Global Presence</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border-2 border-teal-200 rounded-lg text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-3 text-teal-700">1000+ Hotels</h3>
                <p className="text-gray-700">Bittel products installed in thousands of hotels worldwide, from luxury properties to boutique establishments.</p>
              </div>
              <div className="p-8 border-2 border-cyan-200 rounded-lg text-center">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-700">Global Markets</h3>
                <p className="text-gray-700">Successfully deployed across multiple continents, serving hotels in diverse regions and cultures.</p>
              </div>
              <div className="p-8 border-2 border-teal-200 rounded-lg text-center">
                <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
                <h3 className="text-2xl font-bold mb-3 text-teal-700">Guest Satisfaction</h3>
                <p className="text-gray-700">High guest satisfaction ratings across all deployments. Guests appreciate the innovation and reliability of Bittel solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Bittel */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Hotels Choose Bittel</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="p-8 bg-cyan-500 bg-opacity-20 rounded-lg border-l-4 border-cyan-300 backdrop-blur">
                <h3 className="text-xl font-bold mb-3 text-white">✓ Wide range of guestroom & bathroom phones</h3>
                <p className="text-gray-100">Comprehensive selection of products designed for every room type and guest need. From premium bedside phones to durable bathroom units.</p>
              </div>
              <div className="p-8 bg-blue-500 bg-opacity-20 rounded-lg border-l-4 border-blue-300 backdrop-blur">
                <h3 className="text-xl font-bold mb-3 text-white">✓ Reliable Quality Manufacturer</h3>
                <p className="text-gray-100">Proven manufacturer with decades of experience delivering high-quality products. Thousands of successful installations worldwide.</p>
              </div>
              <div className="p-8 bg-purple-500 bg-opacity-20 rounded-lg border-l-4 border-purple-300 backdrop-blur">
                <h3 className="text-xl font-bold mb-3 text-white">✓ Colors and Customization of phones</h3>
                <p className="text-gray-100">Extensive color palettes and customization options to match your hotel's unique aesthetic. Design flexibility for every property style.</p>
              </div>
              <div className="p-8 bg-teal-500 bg-opacity-20 rounded-lg border-l-4 border-teal-300 backdrop-blur">
                <h3 className="text-xl font-bold mb-3 text-white">✓ Fast delivery worldwide</h3>
                <p className="text-gray-100">Reliable global logistics ensuring timely delivery of products to any location. Efficient supply chain for seamless project execution.</p>
              </div>
              <div className="p-8 bg-amber-500 bg-opacity-20 rounded-lg border-l-4 border-amber-300 backdrop-blur">
                <h3 className="text-xl font-bold mb-3 text-white">✓ Get the support locally</h3>
                <p className="text-gray-100">Local support teams available in major markets. Responsive service and technical assistance whenever you need it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-700">Transform Your Guest Experience</h2>
          <p className="text-lg text-gray-700 mb-8">Upgrade your hotel with Bittel's innovative smart devices. Guests will appreciate the modern conveniences and seamless functionality.</p>
          <a href="/contact" className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
