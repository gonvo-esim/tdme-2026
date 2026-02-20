import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Transmission Networks | TDME Enterprise Solutions",
  description: "Network management systems, TDM networks, carrier-grade switches, and data centers. High-performance data transmission infrastructure for enterprises.",
  keywords: "data transmission, network management, TDM networks, carrier-grade switches, data centers, enterprise networks",
  openGraph: {
    title: "TDME Data Transmission",
    description: "Enterprise data transmission and network infrastructure",
    type: "website",
    url: "https://tdme.net/data-transmission",
  },
};

export default function DataTransmissionPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Data Transmission</h1>
            <p className="text-xl">Enterprise-grade network infrastructure for safe, fast, and highly available operations</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Building the Right Communication Infrastructure</h2>
            <p className="text-lg text-gray-700 mb-8">
              No matter the size of your organization, building the right communication infrastructure is the key to SAFE, FAST, HIGH AVAILABILITY operation. TDME delivers comprehensive data transmission solutions designed for enterprise reliability.
            </p>
          </div>
        </section>

        {/* Critical Communication Image */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="rounded-lg shadow-lg overflow-hidden border border-purple-200 bg-white">
            <Image
              src="/images/data-transmission/placeholder_critical_communication.webp"
              alt="Critical Communication Infrastructure"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Core Solutions */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border-l-4 border-purple-600 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Hardware Infrastructure</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Carrier-grade Switches 600Gbps:</strong> Ultra-high-capacity switching for large-scale deployments</li>
                  <li><strong>Industrial Switches:</strong> Ruggedized equipment for harsh environments</li>
                  <li><strong>Media Converters:</strong> Seamless integration across different transmission media</li>
                </ul>
              </div>

              <div className="p-8 border-l-4 border-purple-600 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Communication Protocols</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>All Communication Protocols:</strong> Support for legacy and modern protocols</li>
                  <li><strong>Integration Protocols:</strong> Seamless integration with existing systems</li>
                  <li><strong>VSAT & Rugged Equipment:</strong> Solutions for remote and harsh environments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-6 rounded-lg">Why Choose Our Data Transmission Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="text-purple-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Safety</h3>
                  <p className="text-gray-700">Enterprise-grade security and reliability standards ensure your data is always protected</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Speed</h3>
                  <p className="text-gray-700">High-capacity switching and optimized routing deliver maximum throughput</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Availability</h3>
                  <p className="text-gray-700">Redundant systems and automatic failover ensure minimal downtime</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Scalability</h3>
                  <p className="text-gray-700">Easily expand your network as your business grows without major rework</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Flexibility</h3>
                  <p className="text-gray-700">Support for multiple protocols and standards ensures compatibility</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-purple-600 text-3xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Support</h3>
                  <p className="text-gray-700">24/7 monitoring and dedicated support teams for your peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg">Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="font-bold mb-3">Financial Services</h3>
                <p className="text-sm text-gray-600">High-frequency trading, secure transactions, real-time data</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="font-bold mb-3">Utilities & Power</h3>
                <p className="text-sm text-gray-600">Grid management, remote monitoring, SCADA systems</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="font-bold mb-3">Telecommunications</h3>
                <p className="text-sm text-gray-600">Carrier backbone, inter-office connectivity</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg text-center">
                <h3 className="font-bold mb-3">Enterprise</h3>
                <p className="text-sm text-gray-600">Data center interconnection, disaster recovery</p>
              </div>
            </div>

            {/* Product Images */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg shadow-lg overflow-hidden border border-purple-200 bg-white">
                <Image
                  src="/images/data-transmission/hero_loop.webp"
                  alt="Data Transmission Network Loop"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden border border-purple-200 bg-white">
                <Image
                  src="/images/data-transmission/product_transmission.webp"
                  alt="Data Transmission Product"
                  width={500}
                  height={350}
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
