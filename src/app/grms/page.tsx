import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GRMS Smart Hotel Management System | Hotel Room Control & IoT",
  description: "GRMS provides advanced smart hotel solutions with Bluetooth Mesh, occupancy detection, and integrated IoT platform for modern hospitality management and guest experience.",
  keywords: "GRMS, smart hotel, room control, hotel IoT, hospitality technology, smart rooms, occupancy detection",
  openGraph: {
    title: "TDME GRMS Smart Hotel System",
    description: "Advanced smart hotel management with IoT integration",
    type: "website",
    url: "https://tdme.net/grms",
  },
};

export default function GRMSPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Tiancheng 669 Series - GRMS</h1>
            <p className="text-xl">Bittel Smart Product Solution for High-End Luxury Hotels</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-teal-700">Smart Devices for Modern Travelers</h2>
            <p className="text-lg text-gray-700 mb-8">
              Bittel Intelligent Technology is a leading provider of smart devices for hotel guestrooms that deliver mobile charging, casting, calling, and streaming services to today's modern travelers. Our products are known for their reliability, innovative designs, and exceptional functionality, installed in thousands of hotels around the world.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-teal-600">What Sets Bittel Apart</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                <h4 className="font-bold text-lg mb-3">🚀 Innovation-First Design</h4>
                <p className="text-gray-700">Groundbreaking designs that push the boundaries of what hotel room devices can do. Continuous R&D to stay ahead of guest expectations.</p>
              </div>
              <div className="p-6 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                <h4 className="font-bold text-lg mb-3">🔋 Multi-Function Solutions</h4>
                <p className="text-gray-700">Mobile charging, wireless casting, premium audio calling, and streaming—all integrated into elegant, space-saving designs.</p>
              </div>
              <div className="p-6 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
                <h4 className="font-bold text-lg mb-3">🌍 Global Reliability</h4>
                <p className="text-gray-700">Installed in thousands of hotels globally. Proven track record of reliability and guest satisfaction across diverse markets and climates.</p>
              </div>
              <div className="p-6 bg-cyan-50 rounded-lg border-l-4 border-cyan-600">
                <h4 className="font-bold text-lg mb-3">🏭 Manufacturing Excellence</h4>
                <p className="text-gray-700">State-of-the-art manufacturing facilities with superior quality control. Advanced engineering for durability and performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tiancheng 669 Overview Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Tiancheng 669 Series Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              The Tiancheng 669 Series is a wireless, Bluetooth Mesh communication solution centered around <strong>Huawei Wi-Fi 7 AP + Bittel Gateway APP</strong>, delivering diverse intelligent solutions for high-end luxury hotels.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Series Composition:</strong> 4 comprehensive solution packages designed to meet varying hospitality requirements.
            </p>
          </div>
        </section>

        {/* Topology Diagram Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">System Architecture</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative w-full h-auto">
              <Image
                src="/images/grms/669-Topology-diagram.webp"
                alt="Tiancheng 669 Series Topology Diagram"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            <p className="text-gray-600 text-center mt-4 italic">
              Tiancheng 669 Series Topology Diagram - Huawei Wi-Fi 7 AP + Bittel Gateway Integration
            </p>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Core Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Cost Reduction & Energy Efficiency</h3>
              <p className="text-gray-700">
                Integrates Bittel Wireless Gateway functionality with Huawei Wi-Fi 7. Built-in CSI sensing detects occupancy status, enabling energy conservation. Camera sensing ensures safer guest stays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Distributed Module Design</h3>
              <p className="text-gray-700">
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>No traditional RCU boxes required</li>
                  <li>No installation space needed</li>
                  <li>No costly rewiring for existing hotels</li>
                </ul>
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">High Reliability</h3>
              <p className="text-gray-700">
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Normal operation of local scenes and switches after network disconnection</li>
                  <li>Anti-fly-order functionality</li>
                </ul>
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Humanized Experience</h3>
              <p className="text-gray-700">
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Retains lighting settings before power loss</li>
                  <li>Constant-voltage and 0-10V dimming options</li>
                  <li>Smooth, seamless dimming experience</li>
                </ul>
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Platform Management</h3>
              <p className="text-gray-700">
                Batch scenario management and automatic fault reporting for centralized control and monitoring.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Installation & Efficiency</h3>
              <p className="text-gray-700">
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>OTA upgrades and plug-and-play functionality</li>
                  <li>Room detection capabilities</li>
                  <li>Energy consumption monitoring and management</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Hybrid Integration Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Hybrid Integrated RCU Solution</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  The Tiancheng 669 Series seamlessly integrates <strong>Huawei Wi-Fi 7 technology</strong> with <strong>Bittel Gateway solutions</strong> to create a comprehensive hybrid RCU (Remote Control Unit) system.
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>Unified platform combining wireless and wired solutions</li>
                  <li>Reduced infrastructure complexity</li>
                  <li>Enhanced compatibility with existing hotel systems</li>
                  <li>Scalable architecture for hotels of any size</li>
                  <li>Future-proof technology integration</li>
                </ul>
              </div>
              <div className="relative w-full h-auto">
                <Image
                  src="/images/grms/669-integrations.webp"
                  alt="Hybrid Integrated RCU Solution - Huawei and Bittel"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* IOT Platform Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Advanced IoT Platform</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-auto order-2 md:order-1">
                <Image
                  src="/images/grms/669-IOT-platform.webp"
                  alt="Tiancheng 669 IoT Platform"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-lg text-gray-700 mb-6">
                  Our comprehensive IoT platform provides centralized management and monitoring of all smart devices throughout the hotel.
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>Real-time monitoring of all connected devices</li>
                  <li>Automated scene creation and management</li>
                  <li>Guest customization and personalization</li>
                  <li>Energy consumption analytics</li>
                  <li>Remote maintenance and updates</li>
                  <li>Fault detection and alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CSI Technology Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Huawei Wi-Fi 7 CSI Technology</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative w-full h-auto mb-8">
              <Image
                src="/images/grms/669-csi-technology.webp"
                alt="CSI Technology Visualization"
                width={1200}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What is CSI Perception?</h3>
            <p className="text-gray-700 mb-6">
              CSI (Channel State Information) is a cutting-edge technology integrated into Huawei Wi-Fi 7 that enables non-intrusive room occupancy detection and environmental awareness without cameras or motion sensors.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h4 className="font-bold text-gray-800 mb-4">Key Benefits:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Privacy-preserving occupancy detection</li>
                <li>Seamless scene automation based on room status</li>
                <li>Enhanced energy efficiency through intelligent switching</li>
                <li>Integrated into standard Wi-Fi 7 infrastructure</li>
                <li>No additional hardware required beyond the AP</li>
                <li>Real-time guest comfort optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Packages Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Solution Packages</h2>
          <div className="space-y-8">
            {/* Core Basic Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Core Basic Package</h3>
              <p className="text-gray-700 mb-4">
                <strong>Core Technology:</strong> Huawei Wi-Fi 7 AP + Bittel Gateway
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Centralized management of smart devices within guest rooms</li>
                <li>Distributed modular design - modules behind switch panels</li>
                <li>Control of lighting, curtains, AC, and other equipment</li>
                <li>Network multiplexing - eliminates additional cabling needs</li>
                <li>Multi-Node Support: APs manage 50+ nodes</li>
                <li>Remote and local upgrade methods</li>
                <li>Compatible with ES systems for energy conservation</li>
                <li>Anti-fly-by-night functionality</li>
              </ul>
            </div>

            {/* Essence Container */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Essence Container + CSI (Wi-Fi 7)</h3>
              <p className="text-gray-700 mb-4">
                <strong>Enhancement:</strong> CSI Human Detection Technology
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Automatic scene switching based on occupancy detection</li>
                <li>Occupied and unoccupied mode automation</li>
                <li>Enhanced guest room intelligence</li>
                <li>Predictive energy management</li>
                <li>All features from Core Basic Package</li>
              </ul>
            </div>

            {/* Flagship Container */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Flagship Container + CSI + Anti-Peeping Camera Detection (Wi-Fi 7)</h3>
              <p className="text-gray-700 mb-4">
                <strong>Premium Security:</strong> Advanced Detection and Alert Systems
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>CSI human detection with occupancy automation</li>
                <li>Integrated camera detection technology</li>
                <li>Real-time abnormal condition reporting</li>
                <li>Automatic alert mechanisms for guest safety</li>
                <li>Enhanced security measures for hotels</li>
                <li>All previous package features included</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Smart Hotel Series Comparison Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Smart Hotel Solutions from Bittel</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-8">
              Explore our comprehensive lineup of smart hotel solutions designed to meet every hospitality need, from boutique hotels to luxury resorts.
            </p>
            <div className="relative w-full h-auto">
              <Image
                src="/images/grms/669-smart-hotel-series.webp"
                alt="Bittel Smart Hotel Solutions Comparison"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-600 text-center mt-6 italic">
              Tiancheng 669 Series - Part of Bittel's Complete Smart Hotel Ecosystem
            </p>
          </div>
        </section>

        {/* Smart Delivery Technology Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Smart Delivery Technology</h2>
          <p className="text-lg text-gray-700 mb-12">
            Enhance your hotel's operational efficiency with Bittel's advanced smart delivery solutions, combining autonomous robotics with IoT intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delivery System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/images/grms/669-hotel-delivery.webp"
                  alt="Smart Hotel Delivery System"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Smart Delivery System</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Automated guest delivery service</li>
                  <li>Integrated with room management system</li>
                  <li>Real-time delivery tracking</li>
                  <li>Contactless delivery options</li>
                  <li>Reduces staff workload</li>
                </ul>
              </div>
            </div>

            {/* Delivery Robot */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/images/grms/669-hotel-delivery-robot.webp"
                  alt="Smart Hotel Delivery Robot"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Autonomous Delivery Robot</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Autonomous navigation through corridors</li>
                  <li>Elevator integration capability</li>
                  <li>Safe and hygienic delivery</li>
                  <li>24/7 operation availability</li>
                  <li>Enhances guest experience and safety</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Guest Security Solutions */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Smart Guest Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Interactive Peephole */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/images/grms/peephole.webp"
                  alt="Interactive Peephole"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Interactive Peephole</h3>
                <p className="text-gray-700">Smart peephole technology providing secure guest verification. Digital display shows visitor information securely inside the room, enhancing guest safety and privacy with modern security solutions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hotel?</h2>
            <p className="text-lg mb-8">
              Discover how Tiancheng 669 Series can enhance guest experience while reducing operational costs and improving energy efficiency.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Contact Our Sales Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
