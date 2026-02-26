"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ProductImage {
  series: string;
  images: Array<{ name: string; src: string }>;
}

const productImages: ProductImage[] = [
  {
    series: "IP Phone Models",
    images: [
      { name: "7712IP", src: "https://en.tdme.net/wp-content/uploads/2024/04/7712IP.webp" },
      { name: "7713MIP-LP", src: "https://en.tdme.net/wp-content/uploads/2024/04/7713MIP-LP.webp" },
      { name: "HA62IP-10S", src: "https://en.tdme.net/wp-content/uploads/2024/04/HA62IP-10S.webp" },
      { name: "HA62IP-N", src: "https://en.tdme.net/wp-content/uploads/2024/04/HA62IP-N.webp" },
      { name: "HWD62IP-10S-C2-7V2", src: "https://en.tdme.net/wp-content/uploads/2024/04/HWD62IP-10S-C2-7V2.webp" },
      { name: "HWD62IP-10S", src: "https://en.tdme.net/wp-content/uploads/2024/04/HWD62IP-10S.webp" },
    ],
  },
];

export default function BittelIPSIPPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Bittel IP/SIP Phones</h1>
            <p className="text-xl">Modern VoIP communication for forward-thinking hotels</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Next-Generation VoIP Solutions</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bittel IP/SIP phones represent the cutting edge of hotel communication technology. Built on industry-standard SIP protocols, these phones deliver superior reliability, scalability, and feature richness for modern hospitality properties.
            </p>
            <p className="text-lg text-gray-700">
              Designed for seamless integration with modern PBX systems and cloud-based communication platforms, Bittel SIP phones reduce infrastructure complexity while enhancing guest communication capabilities.
            </p>
          </div>
        </section>

        {/* Product Images Gallery */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Product Lines</h2>
            <div className="space-y-12">
              {/* IP Phone Models */}
              <div className="border-l-4 border-blue-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-blue-300">IP Phone Models</h3>
                <div className="p-8 bg-slate-700 rounded-lg border border-blue-400">
                  <h4 className="text-xl font-bold mb-6 text-blue-300">📸 Product Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productImages[0].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleImageClick(img.src)}
                        className="relative h-40 rounded-lg overflow-hidden border-2 border-blue-300 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer bg-gray-600"
                        title="Click to view larger"
                      >
                        <Image
                          src={img.src}
                          alt={img.name}
                          fill
                          className="object-contain p-2 hover:scale-110 transition-transform"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="text-white text-3xl opacity-0 hover:opacity-100 transition-opacity">
                            🔍
                          </div>
                        </div>
                        <p className="absolute bottom-2 left-2 right-2 text-white text-xs bg-black/50 p-1 rounded truncate">
                          {img.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for enlarged image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handleCloseModal}
                className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Product"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        )}

        {/* Key Benefits */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">VoIP Technology Advantages</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-700 rounded-lg border border-blue-400">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">🌐 SIP Standards Compliance</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Full SIP RFC3261 compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Compatible with any SIP-based PBX system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Industry-standard protocol ensures reliability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span>Future-proof VoIP architecture</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-indigo-400">
                <h3 className="text-2xl font-bold mb-6 text-indigo-300">⚡ Power over Ethernet (POE)</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>POE 802.3af support eliminates need for separate power</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Simplified cabling and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Reduced infrastructure costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-3">✓</span>
                    <span>Backup power during network outages</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-cyan-400">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">🔒 Security Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>TLS encryption for signaling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>SRTP for secure media transmission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Advanced encryption protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Carrier-grade security standards</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-green-400">
                <h3 className="text-2xl font-bold mb-6 text-green-300">🛠️ Network Management</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>DHCP and Static IP support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>VLAN Tagging for network segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Web and Server-based configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>TFTP, HTTP, HTTPS provisioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>TR069 support for remote management</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-yellow-400">
                <h3 className="text-2xl font-bold mb-6 text-yellow-300">📡 Transport Protocols</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>TCP support for reliable delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>UDP for low-latency communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>TLS for secure connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">✓</span>
                    <span>SRTP for encrypted media</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">☎️ Communication Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>High-definition audio quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Full-duplex speakerphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Echo cancellation technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Advanced guest service features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Available Models */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Available Models</h2>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Bittel Classic Series - SIP Enabled</h3>
              <p className="text-gray-700 mb-4">
                Traditional corded and cordless phones adapted with SIP technology. Industrial-quality manufacturing with modern VoIP capabilities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-3">Corded Series</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Multiple key configurations</li>
                    <li>• Premium audio quality</li>
                    <li>• Compact design</li>
                    <li>• SIP RFC3261 compliant</li>
                  </ul>
                </div>
                <div className="p-6 bg-white rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-3">Cordless Series</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• DECT 6.0 wireless</li>
                    <li>• Multiple handset support</li>
                    <li>• Lifeline support</li>
                    <li>• SIP enabled</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">UNOMedia5 SIP Series</h3>
              <p className="text-gray-700 mb-4">
                All-in-one integrated systems with VoIP. Phone, clock, audio, and charging with SIP technology.
              </p>
              <div className="p-6 bg-white rounded-lg border border-indigo-200">
                <ul className="space-y-2 text-gray-700">
                  <li>• Integrated design</li>
                  <li>• High-quality stereo audio</li>
                  <li>• Multiple charging positions</li>
                  <li>• POE 802.3af support</li>
                  <li>• Multiple configurations available</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg border-2 border-purple-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">MODA Series - SIP Ready</h3>
              <p className="text-gray-700 mb-4">
                Modular SIP-enabled phones with customizable features. Advanced speakerphone module with full SIP compliance.
              </p>
              <div className="p-6 bg-white rounded-lg border border-purple-200">
                <ul className="space-y-2 text-gray-700">
                  <li>• Modular SIP architecture</li>
                  <li>• Customizable configurations</li>
                  <li>• Premium audio quality</li>
                  <li>• Voice recognition ready</li>
                  <li>• Enterprise-grade features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Bittel SIP */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-700">Why Choose Bittel IP/SIP Phones</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="text-3xl mr-4">🔧</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Future-Proof Technology</h3>
                  <p className="text-gray-700">Standard SIP protocol ensures compatibility with evolving communication systems. Investment protection for years to come.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-indigo-600">
                <div className="text-3xl mr-4">💰</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">Cost Efficiency</h3>
                  <p className="text-gray-700">POE support reduces infrastructure costs. Single Ethernet connection provides both power and data. Lower installation and maintenance expenses.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-cyan-600">
                <div className="text-3xl mr-4">🔒</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-700">Enterprise Security</h3>
                  <p className="text-gray-700">TLS and SRTP encryption protect sensitive guest communications. Carrier-grade security standards ensure compliance with industry regulations.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-400">
                <div className="text-3xl mr-4">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Scalability</h3>
                  <p className="text-gray-700">Easy to add phones without infrastructure upgrades. VLAN support enables flexible network management across large properties.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-indigo-400">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">Proven Reliability</h3>
                  <p className="text-gray-700">Industry-standard SIP technology with extensive track record. Widely deployed across global hospitality properties.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Upgrade to Modern VoIP</h2>
          <p className="text-lg text-gray-700 mb-8">Experience the benefits of VoIP technology with Bittel IP/SIP phones. Reliable, secure, and future-ready communication.</p>
          <a href="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
