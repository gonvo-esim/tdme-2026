import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About TDME | Global Connectivity Solutions Provider",
  description: "Learn about TDME: a leading provider of enterprise-grade connectivity and IoT solutions for industrial, commercial, and mobile applications worldwide.",
  keywords: "about TDME, company history, connectivity solutions, IoT provider, enterprise solutions",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">About TDME</h1>
            <p className="text-xl">Revolutionizing global connectivity through innovative, enterprise-grade solutions</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-10 border-l-4 border-blue-600">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower businesses worldwide with enterprise-grade connectivity solutions that enable seamless communication, real-time monitoring, and intelligent decision-making across industrial, commercial, and mobile environments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-10 border-l-4 border-indigo-600">
              <h2 className="text-3xl font-bold mb-4 text-indigo-600">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A hyper-connected world where organizations leverage advanced IoT and connectivity technologies to optimize operations, enhance security, and unlock new revenue opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Who We Are</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                TDME is a global provider of enterprise-grade connectivity and IoT solutions serving industrial, commercial, and mobile sectors. With years of expertise in network design, implementation, and optimization, we deliver comprehensive solutions that drive operational excellence and business transformation.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our portfolio spans from critical infrastructure connectivity for power stations and offshore platforms to smart hospitality solutions, advanced security systems, and intelligent mobile connectivity for travelers worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Headquartered globally with operations across multiple continents, TDME serves Fortune 500 companies, government agencies, and innovative startups with trusted, reliable, and scalable solutions that power their digital ambitions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">Excellence</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We commit to the highest standards in every solution we deliver, ensuring reliability, performance, and customer satisfaction across all touchpoints.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600">Partnership</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We build long-term relationships based on trust, transparency, and mutual success. Your challenges are our challenges.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-600">Innovation</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We continuously explore emerging technologies and methodologies to provide cutting-edge solutions that drive transformation.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-green-600">Security</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Data protection and system security are paramount. We implement industry-leading practices to safeguard your assets.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-yellow-600">Reliability</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  24/7 support and 99.9% uptime commitment ensure your operations run without interruption.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-red-600">Global Presence</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Our worldwide footprint and local expertise enable us to serve markets across continents with localized support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Industrial Connectivity</h3>
                <p className="text-gray-700 mb-4">
                  Mission-critical solutions for power generation, offshore operations, oil & gas, and renewable energy installations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Power station monitoring and control</li>
                  <li>✓ Offshore platform communication</li>
                  <li>✓ Remote equipment management</li>
                  <li>✓ Real-time data transmission</li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">Mobile & Travel Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Global eSIM connectivity for travelers, business professionals, and remote workers. Coverage across 190+ countries.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ International roaming coverage</li>
                  <li>✓ Instant digital SIM provisioning</li>
                  <li>✓ Transparent pricing and top-up</li>
                  <li>✓ Multi-destination support</li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold mb-4 text-purple-900">Data Transmission & Networks</h3>
                <p className="text-gray-700 mb-4">
                  Enterprise-grade data center solutions and carrier-class switches for mission-critical environments.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Carrier-grade switching infrastructure</li>
                  <li>✓ Network management and orchestration</li>
                  <li>✓ Data center redundancy and failover</li>
                  <li>✓ High-capacity transport networks</li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-green-900">Security & Surveillance</h3>
                <p className="text-gray-700 mb-4">
                  Integrated access control, biometric systems, CCTV surveillance, and command centers for comprehensive security.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Biometric and RFID access control</li>
                  <li>✓ Integrated CCTV management</li>
                  <li>✓ Perimeter intrusion detection</li>
                  <li>✓ Centralized command & control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Experience */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Industry Experience</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Energy & Utilities</h3>
                <p className="text-gray-600">Power generation and distribution networks</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Oil & Gas</h3>
                <p className="text-gray-600">Offshore and onshore operations</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Transportation</h3>
                <p className="text-gray-600">Rail, metro, and aviation networks</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Hospitality</h3>
                <p className="text-gray-600">Smart hotels and guest services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's discuss how TDME solutions can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                Learn About Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
