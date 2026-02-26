"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function SecurityPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Security & Access Control Solutions</h1>
            <p className="text-xl">Motorola DMR, Avigilon & Pelco - Complete integrated security systems for Hospitality & Enterprise</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Security Solutions</h2>
            <p className="text-lg text-gray-700 mb-8">
              TDME provides integrated security and access control solutions powered by industry-leading Motorola Solutions technology. From Motorola DMR digital communications and Avigilon/Pelco surveillance cameras to advanced access control, we deliver complete visibility and control over who enters your facilities, when they access them, and what activities occur within your premises.
            </p>
          </div>
        </section>

        {/* Motorola DMR Systems */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-400">Motorola MOTOTRBO Digital Mobile Radio (DMR)</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1 flex flex-col items-center justify-center">
                <div className="w-full h-64 relative bg-gray-100 rounded-lg border-2 border-red-400 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedImage("/images/bittel/business-phone.webp")}>
                  <Image
                    src="/images/bittel/business-phone.webp"
                    alt="Motorola MOTOTRBO Digital Radio"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-slate-700 rounded-lg border border-red-400">
                    <h3 className="text-2xl font-bold mb-6 text-red-300">🎙️ Hospitality Communications</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-3">✓</span>
                        <span>Instant seamless communication between security, front desk, housekeeping, and valet staff</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-3">✓</span>
                        <span>Discreet Bluetooth-enabled earpieces for hands-free, professional communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-3">✓</span>
                        <span>Emergency panic buttons and instant lockdown notifications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-3">✓</span>
                        <span>GPS tracking of security personnel for real-time dispatch and safety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-3">✓</span>
                        <span>Mass notification system for property-wide alerts during emergencies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 bg-slate-700 rounded-lg border border-orange-400">
                    <h3 className="text-2xl font-bold mb-6 text-orange-300">🔐 Enterprise Security Features</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Encrypted channels for secure, confidential security communications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Integrated workflows with video analytics and access control systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Data messaging and work ticket system for efficient task management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>IP67-rated rugged radios designed for harsh environments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-400 mr-3">✓</span>
                        <span>Wide-area coverage with MOTOTRBO repeaters for sprawling properties</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avigilon and Pelco Cameras */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Avigilon & Pelco Video Surveillance</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-700">
                <div className="mb-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedImage("/images/industrial/cctv_industrial.webp")}>
                  <div className="w-full h-48 relative bg-gray-100 rounded-lg border-2 border-red-600 overflow-hidden">
                    <Image
                      src="/images/industrial/cctv_industrial.webp"
                      alt="Avigilon Advanced Camera"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-red-700">📹 Avigilon Advanced Cameras</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">★</span>
                    <span><strong>High-Megapixel Cameras:</strong> 4K to 8K resolution for crystal-clear footage and intelligent video analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">★</span>
                    <span><strong>AI-Powered Analytics:</strong> Automatic detection of unusual behavior, intrusions, and suspicious activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">★</span>
                    <span><strong>Wide Dynamic Range:</strong> Superior image quality in challenging lighting conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">★</span>
                    <span><strong>Cloud & Edge Recording:</strong> Flexible storage options with redundancy and instant access</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-blue-50 rounded-lg border-l-4 border-blue-700">
                <div className="mb-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedImage("/images/industrial/city_cctv.webp")}>
                  <div className="w-full h-48 relative bg-gray-100 rounded-lg border-2 border-blue-600 overflow-hidden">
                    <Image
                      src="/images/industrial/city_cctv.webp"
                      alt="Pelco Pro Security Camera"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-blue-700">📷 Pelco Pro Security Cameras</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">★</span>
                    <span><strong>Compact & Dome Designs:</strong> Discreet surveillance for hotels, casinos, and public spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">★</span>
                    <span><strong>Thermal & PTZ Options:</strong> Pan-tilt-zoom and thermal imaging for comprehensive coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">★</span>
                    <span><strong>IP & Legacy Support:</strong> Seamless integration with existing surveillance infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">★</span>
                    <span><strong>Secure Video Management:</strong> Integrated with command & control center systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Command Center Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border-2 border-purple-600">
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">🎛️ Motorola Command Center & Video Management</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center">
                <div className="w-full h-56 relative bg-gray-100 rounded-lg border-2 border-purple-400 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedImage("/images/industrial/cctv_industrial.webp")}>
                  <Image
                    src="/images/industrial/cctv_industrial.webp"
                    alt="Video Management Command Center"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
                <div className="text-gray-300 space-y-4">
                  <p className="text-lg"><strong className="text-purple-300">Unified Security Platform</strong> integrating Avigilon and Pelco cameras with Motorola radio systems</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▸</span>
                      <span><strong>Central Monitoring:</strong> View live and recorded footage from all Avigilon and Pelco cameras in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▸</span>
                      <span><strong>Alert Integration:</strong> Automatic dispatch via Motorola radios when alerts or anomalies are detected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▸</span>
                      <span><strong>Evidence Management:</strong> Secure archival and retrieval of critical security incidents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▸</span>
                      <span><strong>24/7 Operations:</strong> Redundancy, failover systems, and enterprise-grade reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg">Integrated Security Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">Access Control</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Biometric Systems:</strong> Fingerprint, facial recognition, iris scanning for secure authentication</li>
                  <li><strong>Card & Badge Systems:</strong> RFID and smartcard technology for controlled access</li>
                  <li><strong>Multi-Level Access:</strong> Role-based access control for different facility areas</li>
                  <li><strong>Visitor Management:</strong> Temporary access and visitor tracking systems</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">Surveillance & Monitoring</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Industrial Surveillance:</strong> CCTV systems for comprehensive facility monitoring</li>
                  <li><strong>Real-time Monitoring:</strong> Live feeds from multiple Avigilon/Pelco cameras and sensors</li>
                  <li><strong>Recording & Archiving:</strong> Long-term secure video storage and retrieval</li>
                  <li><strong>Analytics:</strong> AI-powered detection of suspicious activities and anomalies</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">Perimeter Security</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Intrusion Detection:</strong> Perimeter sensors and alarm systems</li>
                  <li><strong>Intrusion Prevention:</strong> Automated response to security breaches</li>
                  <li><strong>Fencing & Barriers:</strong> Physical security infrastructure integration</li>
                  <li><strong>Environmental Monitoring:</strong> Temperature, humidity, and other environmental sensors</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-700">
                <h3 className="text-2xl font-bold mb-4 text-red-700">Command & Control Center</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Centralized Management:</strong> Single dashboard for DMR radios, cameras, and access systems</li>
                  <li><strong>Alert Notification:</strong> Real-time alerts from Motorola, Avigilon, and Pelco systems</li>
                  <li><strong>Incident Response:</strong> Automated and manual response protocols triggered by video/radio events</li>
                  <li><strong>Reporting & Audit:</strong> Complete audit trails and compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-6 rounded-lg">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Complete Visibility</h3>
                <p className="text-gray-700">Know exactly who is in your facility at any given time with DMR communications, video surveillance, and detailed access logs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Mobile Access</h3>
                <p className="text-gray-700">Control and monitor your Motorola, Avigilon, and Pelco systems from anywhere using mobile applications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Real-time Alerts</h3>
                <p className="text-gray-700">Instant notifications from DMR radios and video analytics for any security events or unauthorized access</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Advanced Analytics</h3>
                <p className="text-gray-700">AI-powered Avigilon analysis to detect patterns and predict potential security threats</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Seamless Integration</h3>
                <p className="text-gray-700">Motorola DMR, Avigilon cameras, Pelco systems, and access control work together as one platform</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">📋</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Compliance</h3>
                <p className="text-gray-700">Meet regulatory requirements with detailed audit trails and reporting from all integrated systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg">Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-700">🏨 Hospitality & Hotels</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Motorola DMR for discreet staff coordination</li>
                  <li>✓ Avigilon/Pelco cameras for guest areas and corridors</li>
                  <li>✓ Emergency response coordination and lockdown capabilities</li>
                  <li>✓ VIP escort and asset protection systems</li>
                </ul>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-700">Enterprise & Corporate</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Office buildings and campuses</li>
                  <li>✓ Server rooms and data centers</li>
                  <li>✓ Research facilities</li>
                  <li>✓ Financial institutions</li>
                </ul>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-700">Infrastructure & Utilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Power stations and substations</li>
                  <li>✓ Water treatment plants</li>
                  <li>✓ Telecommunications hubs</li>
                  <li>✓ Transportation facilities</li>
                </ul>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-700">Industrial Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Manufacturing plants</li>
                  <li>✓ Oil & gas facilities</li>
                  <li>✓ Mining operations</li>
                  <li>✓ Chemical plants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-700">Integrated Security with Motorola Solutions</h2>
          <p className="text-lg text-gray-700 mb-8">Combine Motorola DMR communications, Avigilon advanced cameras, and Pelco surveillance for complete security coverage</p>
          <a href="/contact" className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">
            Request Security Consultation
          </a>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-96 w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
