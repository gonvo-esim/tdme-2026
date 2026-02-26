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
    series: "Jacob Jensen IP/SIP Models",
    images: [
      { name: "IP20D-BT6570", src: "https://en.tdme.net/wp-content/uploads/2024/04/IP20D-BT6570.webp" },
      { name: "IP20-S3", src: "https://en.tdme.net/wp-content/uploads/2024/04/IP20-S3.webp" },
      { name: "IP60DU", src: "https://en.tdme.net/wp-content/uploads/2024/04/IP60DU.webp" },
      { name: "IP60D", src: "https://en.tdme.net/wp-content/uploads/2024/04/IP60D.webp" },
      { name: "IP60WF", src: "https://en.tdme.net/wp-content/uploads/2024/04/IP60WF.webp" },
      { name: "IPHS20D", src: "https://en.tdme.net/wp-content/uploads/2024/04/IPHS20D.webp" },
    ],
  },
];

export default function JacobJensenIPSIPPage() {
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
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Jacob Jensen IP/SIP Phones</h1>
            <p className="text-xl">Premium VoIP solutions with Scandinavian design excellence</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Premium IP Communication</h2>
            <p className="text-lg text-gray-700 mb-4">
              Jacob Jensen IP/SIP phones combine Scandinavian design philosophy with advanced VoIP technology. These premium communication devices deliver exceptional voice quality, elegant aesthetics, and enterprise-grade reliability for discerning hospitality properties.
            </p>
            <p className="text-lg text-gray-700">
              Built with attention to detail and crafted for modern hotel environments, Jacob Jensen phones represent the perfect balance of form and function in professional communication.
            </p>
          </div>
        </section>

        {/* Product Images Gallery */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Product Lines</h2>
            <div className="space-y-12">
              {/* Jacob Jensen Models */}
              <div className="border-l-4 border-purple-400 pl-8">
                <h3 className="text-2xl font-bold mb-8 text-purple-300">Jacob Jensen IP/SIP Models</h3>
                <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                  <h4 className="text-xl font-bold mb-6 text-purple-300">📸 Product Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {productImages[0].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleImageClick(img.src)}
                        className="relative h-40 rounded-lg overflow-hidden border-2 border-purple-300 hover:border-purple-200 hover:shadow-lg transition-all cursor-pointer bg-gray-600"
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

        {/* Key Features */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Premium Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">🎨 Scandinavian Design</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Premium craftsmanship and materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Elegant, minimalist design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Available in multiple finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Integration with modern décor</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-pink-400">
                <h3 className="text-2xl font-bold mb-6 text-pink-300">🌐 Advanced SIP Technology</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Full SIP RFC3261 compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Compatible with all SIP-based systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Secure encrypted communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Enterprise-grade reliability</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-purple-400">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">🔊 Audio Excellence</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>High-definition audio quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Advanced echo cancellation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Crystal-clear speakerphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">✓</span>
                    <span>Professional-grade microphone</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-700 rounded-lg border border-pink-400">
                <h3 className="text-2xl font-bold mb-6 text-pink-300">⚙️ Integration & Management</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>POE 802.3af/at support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Easy network provisioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>Remote management capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-3">✓</span>
                    <span>VLAN support for security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Models Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Available Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Entry-Level Models</h3>
              <p className="text-gray-700 mb-4">
                Perfect for properties seeking the Jacob Jensen design aesthetic with reliable VoIP functionality at accessible price points.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700">IP20 Series</h4>
                  <p className="text-sm text-gray-600 mt-1">Compact design with essential features</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border-2 border-pink-300 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-pink-700">Premium Models</h3>
              <p className="text-gray-700 mb-4">
                Full-featured professional phones with advanced capabilities for high-end hospitality properties.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-700">IP60 Series</h4>
                  <p className="text-sm text-gray-600 mt-1">Premium design with enterprise features</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Jacob Jensen */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-700">Why Choose Jacob Jensen IP/SIP Phones</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
                <div className="text-3xl mr-4">✨</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Design Excellence</h3>
                  <p className="text-gray-700">Award-winning Scandinavian design elevates your guest room aesthetic while delivering professional functionality.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-pink-600">
                <div className="text-3xl mr-4">🔒</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-pink-700">Enterprise Security</h3>
                  <p className="text-gray-700">Built-in security features protect guest communications with TLS encryption and secure provisioning protocols.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
                <div className="text-3xl mr-4">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Proven Reliability</h3>
                  <p className="text-gray-700">Deployed globally in luxury hospitality properties. Industry-standard SIP technology ensures compatibility and longevity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Experience Premium VoIP Design</h2>
          <p className="text-lg text-gray-700 mb-8">Discover how Jacob Jensen IP/SIP phones can elevate your guest experience with Scandinavian elegance and reliable communication.</p>
          <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Demo
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
