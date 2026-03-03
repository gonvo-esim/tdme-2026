import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Network Monitoring & Management Solutions | Enterprise Systems",
  description: "Real-time network monitoring, performance analytics, and system management for enterprise networks. Ensure uptime and optimal network performance worldwide.",
  keywords: "network monitoring, network management, performance monitoring, network analytics, enterprise networks, uptime monitoring",
  openGraph: {
    title: "TDME Network Monitoring",
    description: "Enterprise network monitoring and management solutions",
    type: "website",
    url: "https://tdme.net/network-monitoring",
  },
};

export default function NetworkMonitoringPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Network Monitoring System</h1>
            <p className="text-xl">Real-time network visibility and automated management in under an hour</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-white bg-purple-600 py-3 px-6 rounded-lg inline-block">See More of Your Network with Less Effort</h2>
            <p className="text-lg text-gray-700 mb-8">
              Legacy network management tools are complicated and high-maintenance. Our Network Monitoring System gives corporate IT and MSP teams real-time network visibility and automated discovery—all in minutes, not months. Stop wasting time configuring complex tools and start managing your infrastructure efficiently.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Key Capabilities</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                <span><strong>Automatic Discovery:</strong> Network discovers itself within 30 minutes—no manual configuration needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                <span><strong>Network Mapping:</strong> Visualize complete network topology with automatic device discovery and connection mapping</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                <span><strong>Real-time Monitoring:</strong> See bandwidth spikes, performance issues, and device health at a glance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                <span><strong>Intelligent Alerting:</strong> 64+ preconfigured alerts help you get ahead of issues before they impact operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                <span><strong>Device-Level Insights:</strong> Drill into routers, switches, firewalls with detailed dashboards for performance and health</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-3">✓</span>
                <span><strong>Configuration Backup:</strong> Automatic configuration backup and version control for compliance and disaster recovery</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Network Management Image Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="rounded-lg shadow-lg overflow-hidden border border-purple-200 bg-white">
            <Image
              src="/images/network-monitoring/placeholder_network_management.webp"
              alt="Network Management Interface"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Perfect For Organizations Using */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white bg-purple-600 py-4 px-6 rounded-lg inline-block mx-auto block">Perfect For Organizations Using</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition">
                <p className="font-bold text-purple-700 mb-2">Corporate IT Teams</p>
                <p className="text-sm text-gray-600">Manage enterprise networks with multi-site visibility and centralized control</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition">
                <p className="font-bold text-purple-700 mb-2">Managed Service Providers</p>
                <p className="text-sm text-gray-600">Scale efficiently across hundreds of client networks with multi-tenant architecture</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition">
                <p className="font-bold text-purple-700 mb-2">System Integrators</p>
                <p className="text-sm text-gray-600">Deliver comprehensive network monitoring as part of complete solutions</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition">
                <p className="font-bold text-purple-700 mb-2">Remote Offices</p>
                <p className="text-sm text-gray-600">Monitor distributed networks with centralized visibility and control</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white bg-purple-600 py-4 px-6 rounded-lg inline-block mx-auto block">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-4 text-purple-700">1. Discover</h3>
                <p className="text-gray-700 mb-4">Install a lightweight collector to automatically discover your entire network—switches, firewalls, routers, printers, and any device with an IP address.</p>
                <div className="text-sm text-gray-600">• Automatic device detection<br/>• Network topology mapping<br/>• Deploy free collectors per site</div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-4 text-purple-700">2. Monitor</h3>
                <p className="text-gray-700 mb-4">Get real-time visibility into network performance. Understand bandwidth utilization, interface behavior, and device health across your entire infrastructure.</p>
                <div className="text-sm text-gray-600">• Real-time dashboards<br/>• Performance metrics<br/>• Syslog monitoring<br/>• NetFlow/sFlow support</div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-bold mb-4 text-purple-700">3. Validate</h3>
                <p className="text-gray-700 mb-4">Our engineers ensure everything is set up correctly. We validate credentials, API connections, and data flows so you can trust your monitoring.</p>
                <div className="text-sm text-gray-600">• Setup verification<br/>• Credential validation<br/>• Data signal confirmation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section 1 */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="rounded-lg shadow-lg overflow-hidden border-2 border-purple-300 bg-white">
            <Image
              src="/images/network-monitoring/hero_auvik.webp"
              alt="Network Dashboard & Topology Map"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white bg-purple-600 py-4 px-6 rounded-lg inline-block mx-auto block">Why Choose Our Network Monitoring</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start bg-white p-6 rounded-lg shadow">
                <div className="text-purple-600 text-3xl mr-4">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Fast Deployment</h3>
                  <p className="text-gray-700">Full visibility in under one hour. Collectors are lightweight and deploy in minutes without complex infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow">
                <div className="text-purple-600 text-3xl mr-4">🔧</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Minimal Setup</h3>
                  <p className="text-gray-700">Most configuration happens automatically. Supports 15,000+ device types from 700+ vendors with vendor-neutral approach.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow">
                <div className="text-purple-600 text-3xl mr-4">📈</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Scalable</h3>
                  <p className="text-gray-700">Grow from single-site to multi-site operations effortlessly. Perfect for MSPs managing dozens of client networks.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow">
                <div className="text-purple-600 text-3xl mr-4">🔗</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Built-in Integrations</h3>
                  <p className="text-gray-700">Connect with ConnectWise, ServiceNow, Microsoft Teams, Slack, and 40+ other tools for seamless workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section 2 */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="rounded-lg shadow-lg overflow-hidden border-2 border-indigo-300 bg-white">
            <Image
              src="/images/network-monitoring/product_avik_network.webp"
              alt="Network Performance Analytics"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Network Management?</h2>
            <p className="text-lg mb-8">Get real-time network visibility and automated management. No credit card required.</p>
            <a href="/contact" className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
