import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industrial Connectivity Solutions | TDME Network Services",
  description: "Enterprise-grade industrial connectivity for power stations, oil/gas fields, offshore platforms, and solar farms. Reliable networks for critical infrastructure worldwide.",
  keywords: "industrial connectivity, power station networks, oil gas solutions, offshore platforms, critical infrastructure, industrial networks",
  openGraph: {
    title: "TDME Industrial Connectivity",
    description: "Enterprise industrial connectivity for critical infrastructure",
    type: "website",
    url: "https://tdme.net/industrial",
  },
};

export default function IndustrialPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Industrial Connectivity</h1>
            <p className="text-xl">Critical communications for power, offshore, oil/gas, and renewable energy infrastructure</p>
          </div>
        </section>

        {/* Overview with Image */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <h2 className="text-3xl font-bold mb-6">Mission-Critical Infrastructure Connectivity</h2>
              <p className="text-lg text-gray-700 mb-8">
                Industrial operations require high-availability, secure, and reliable connectivity. TDME provides SONET/SDH, SCADA, and radio connectivity solutions for critical equipment in the most demanding environments.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-orange-600">Coverage Areas</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">⚡ Power Stations</h4>
                  <p className="text-gray-700 text-sm">Reliable connectivity for power generation, distribution, and monitoring systems. Carrier-grade switches ensure uninterrupted operations.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">🛢️ Oil & Gas Fields</h4>
                  <p className="text-gray-700 text-sm">Distributed network management across vast territories with secure encrypted connections.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">🌊 Offshore Platforms</h4>
                  <p className="text-gray-700 text-sm">Satellite and radio connectivity for remote offshore installations with high-speed communications.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold mb-2 text-orange-600">☀️ Solar Farms</h4>
                  <p className="text-gray-700 text-sm">Smart grid integration and remote management of distributed solar installations.</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg shadow-lg overflow-hidden border-2 border-orange-300">
              <Image
                src="/images/industrial/hero_industrial.webp"
                alt="Industrial Infrastructure"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg">Technology & Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Network Infrastructure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ TDM & SONET Networks</li>
                  <li>✓ Carrier-grade switches 600Gbps</li>
                  <li>✓ Industrial switches & media converters</li>
                  <li>✓ Redundant connections</li>
                  <li>✓ Data Centers & hosting</li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Communications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ SCADA systems</li>
                  <li>✓ Radio communication</li>
                  <li>✓ STAR-LINK & RADIO</li>
                  <li>✓ VSAT systems</li>
                  <li>✓ Rugged equipment</li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Management & Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Centralized network management</li>
                  <li>✓ All communication protocols</li>
                  <li>✓ Integration protocols</li>
                  <li>✓ Power solutions</li>
                  <li>✓ Secure encryption</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-6 rounded-lg">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">High Availability</h3>
                  <p className="text-gray-700">99.99% uptime SLA for mission-critical operations. Redundant systems and automatic failover ensure continuous service.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Secure Connectivity</h3>
                  <p className="text-gray-700">End-to-end encryption and secure protocols protect sensitive operational data from unauthorized access.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Remote Operations</h3>
                  <p className="text-gray-700">Control and monitor equipment from anywhere. Real-time data and analytics for informed decision-making.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-orange-600 font-bold text-2xl mr-4">→</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Scalable Infrastructure</h3>
                  <p className="text-gray-700">Grow from small installations to large-scale operations without major infrastructure changes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
