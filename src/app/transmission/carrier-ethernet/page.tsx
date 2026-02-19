import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CarrierEthernetPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Carrier Ethernet</h1>
            <p className="text-xl">Enterprise-Grade Ethernet Services for Mission-Critical Applications</p>
          </div>
        </section>

        {/* Transmission Menu Navigation */}
        <section className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="max-w-6xl mx-auto flex gap-6 text-lg font-medium">
            <Link href="/transmission/mpls-tp" className="text-blue-600 hover:text-blue-800 underline">MPLS-TP</Link>
            <Link href="/transmission/sdh-sonet" className="text-blue-600 hover:text-blue-800 underline">SDH-SONET</Link>
            <Link href="/transmission/carrier-ethernet" className="text-blue-800 border-b-2 border-blue-600 pb-1">Carrier Ethernet</Link>
          </div>
        </section>

        {/* Carrier Ethernet Images */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg shadow-lg overflow-hidden border border-amber-200 bg-white">
              <Image
                src="/images/transmission/am3440-discovery.webp"
                alt="AM3440 Layer Discovery and Fault Management"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden border border-amber-200 bg-white">
              <Image
                src="/images/transmission/am3440-mac.webp"
                alt="AM3440 Media Access Control"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Carrier Ethernet represents the evolution of traditional Ethernet technology into a carrier-grade transport service suitable for telecommunications providers and enterprise networks. Carrier Ethernet extends standard Ethernet capabilities through the addition of essential service quality, management, and operational features required for mission-critical applications and service provider deployments.
            </p>
            <p className="text-lg text-gray-700">
              Unlike best-effort IP networks, Carrier Ethernet provides deterministic service delivery with guaranteed bandwidth, low latency, defined packet loss rates, and comprehensive end-to-end operations and management capabilities. This convergence of Ethernet simplicity with carrier-grade reliability has positioned Carrier Ethernet as the dominant technology for modern telecommunications infrastructure.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Defining Characteristics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Standardization & Interoperability</h3>
                <p className="text-gray-700 mb-4">
                  Carrier Ethernet is standardized through the IEEE 802.1 and MEF (Metro Ethernet Forum) frameworks, ensuring equipment interoperability across multiple vendors and implementations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span>IEEE 802.1Q - VLAN tagging and switching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span>IEEE 802.1ad - Provider Bridges (Q-in-Q)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span>MEF 21 - E-LAN and E-Line services</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Simplicity & Efficiency</h3>
                <p className="text-gray-700 mb-4">
                  Ethernet's architectural simplicity and ubiquity make Carrier Ethernet an economically attractive alternative to legacy circuit-oriented technologies.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">•</span>
                    <span>Low implementation complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">•</span>
                    <span>Reduced operational overhead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">•</span>
                    <span>Lower cost per Mbps of transport capacity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Models */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Service Models</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Carrier Ethernet is organized into standardized service types, each providing specific connectivity and performance characteristics:
            </p>

            <div className="space-y-6">
              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">E-Line (Point-to-Point)</h3>
                <p className="text-gray-700 mb-4">
                  Unidirectional or bidirectional Ethernet Virtual Connection (EVC) between two Customer Edge (CE) nodes, providing dedicated point-to-point connectivity semantics equivalent to leased-line services.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Characteristics:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Fixed bandwidth commitment</li>
                      <li>• Deterministic delivery</li>
                      <li>• Low latency (&lt;50ms typical)</li>
                      <li>• Simple provisioning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Use Cases:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• WAN connectivity</li>
                      <li>• Disaster recovery links</li>
                      <li>• Site-to-site VPN</li>
                      <li>• Dedicated private networks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">E-LAN (Multi-Point)</h3>
                <p className="text-gray-700 mb-4">
                  Multipoint Ethernet Virtual Connection enabling LAN extension across multiple Customer Edge nodes with full Layer 2 connectivity semantics including broadcast and multicast support.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Characteristics:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Multi-point connectivity</li>
                      <li>• MAC learning and forwarding</li>
                      <li>• Broadcast/multicast support</li>
                      <li>• Loop prevention (Spanning Tree)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Use Cases:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• LAN extension</li>
                      <li>• Campus networks</li>
                      <li>• Data center networking</li>
                      <li>• Virtual LAN services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">E-Tree (Hub-and-Spoke)</h3>
                <p className="text-gray-700 mb-4">
                  Specialized multipoint service enabling hub-and-spoke topology with restricted communication patterns. Only the designated root (hub) node can communicate with all spoke nodes, while spokes cannot communicate directly with each other.
                </p>
                <h4 className="font-bold text-gray-800 mb-2">Typical Applications:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Branch office connectivity (central hub with remote offices)</li>
                  <li>• Multicast distribution networks</li>
                  <li>• IPTV service provider networks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quality of Service */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Quality of Service (QoS)</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Carrier Ethernet provides comprehensive QoS mechanisms to guarantee service performance across multiple traffic classes:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-600">Bandwidth Guarantees</h3>
                  <p className="text-gray-700">
                    Committed Information Rate (CIR) and Peak Information Rate (PIR) define minimum and maximum bandwidth for each EVC, ensuring predictable network capacity allocation.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Traffic Prioritization</h3>
                  <p className="text-gray-700">
                    IEEE 802.1p Priority Code Point (PCP) enables mapping of traffic to eight service classes with differentiated scheduling and drop probabilities.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-600">Latency Control</h3>
                  <p className="text-gray-700">
                    Network design and resource management ensure bounded maximum latency suitable for real-time applications including VoIP and video conferencing.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h4 className="text-lg font-bold mb-3 text-amber-600">Service Level Agreement (SLA) Metrics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-3">•</span>
                      <span><strong>Latency:</strong> Maximum one-way transit delay (typically 5-50ms)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-3">•</span>
                      <span><strong>Jitter:</strong> Delay variation control (typically &lt;5ms)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-3">•</span>
                      <span><strong>Packet Loss:</strong> Frame delivery ratio (typically &gt;99.9%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 font-bold mr-3">•</span>
                      <span><strong>Availability:</strong> Uptime commitments (typically 99.99%)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traffic Engineering */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Traffic Management & Policing</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Carrier Ethernet implements sophisticated traffic management to enforce service level commitments and protect network stability:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Rate Limiting</h3>
                <p className="text-gray-700 mb-4">
                  Traffic policing mechanisms enforce subscribed CIR/PIR limits through token bucket algorithms, preventing customer traffic from exceeding committed rates.
                </p>
                <h4 className="font-bold mb-2 text-gray-800">Mechanisms:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Committed Access Rate (CAR)</li>
                  <li>• Token bucket filtering (single/dual rate)</li>
                  <li>• Traffic conditioning</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Queue Management</h3>
                <p className="text-gray-700 mb-4">
                  Queuing disciplines manage competing traffic to prevent congestion and prioritize delay-sensitive applications.
                </p>
                <h4 className="font-bold mb-2 text-gray-800">Algorithms:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Weighted Fair Queuing (WFQ)</li>
                  <li>• Class-Based Queuing (CBQ)</li>
                  <li>• Priority Queuing (PQ)</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200 md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Congestion Avoidance</h3>
                <p className="text-gray-700">
                  Random Early Detection (RED) and similar mechanisms proactively drop packets from flows exceeding allocated rates before buffer exhaustion occurs, enabling TCP congestion control mechanisms to gracefully reduce transmission rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Network Architecture */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Carrier Ethernet Architecture</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Network Elements</h3>
                <p className="text-gray-700 mb-4">
                  Carrier Ethernet networks consist of well-defined functional elements:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>Customer Edge (CE):</strong> Customer equipment terminating Ethernet circuits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>Provider Edge (PE):</strong> Service provider equipment interfacing with customer premises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>Provider Core (P):</strong> Service provider backbone infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>Ethernet Virtual Connection (EVC):</strong> Service instance providing connectivity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border border-amber-200">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Vlan-Based Service Separation</h3>
                <p className="text-gray-700 mb-4">
                  Carrier Ethernet leverages VLAN technology to separate customer services:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>Customer VLAN ID (C-VID):</strong> Customer-facing VLAN tag for transparent preservation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>Service Provider VLAN ID (S-VID):</strong> Provider backbone VLAN tag for service multiplexing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>Q-in-Q (802.1ad):</strong> Double VLAN tagging for customer VLAN preservation in multitenancy scenarios</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Protection & Resilience */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Protection & Redundancy</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Carrier Ethernet networks implement multiple protection mechanisms to ensure service availability:
            </p>

            <div className="space-y-6">
              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Link Protection</h3>
                <p className="text-gray-700 mb-4">
                  Dual fiber or alternative transmission paths provide automatic protection against single link failures. Automatic switchover mechanisms activate protection paths within milliseconds of failure detection.
                </p>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Ring Topology Protection</h3>
                <p className="text-gray-700 mb-4">
                  Ring-based metro networks implement Spanning Tree Protocol (RSTP/MSTP) and provider bridge ring protection (G.8032) for fast convergence (&lt;50ms) upon ring segment failure.
                </p>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Service Redundancy</h3>
                <p className="text-gray-700 mb-4">
                  Multiple parallel EVCs between the same customer endpoints enable active-active or active-standby service configurations with automatic failover to backup paths.
                </p>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Diversity Requirements</h3>
                <p className="text-gray-700">
                  Geographic and infrastructure diversity ensures that working and protection paths do not share common single-point failures, guaranteeing end-to-end resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multicast & Advanced Features */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Advanced Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-600">Multicast Support</h3>
                  <p className="text-gray-700">
                    Native Layer 2 multicast forwarding enables efficient bandwidth utilization for point-to-multipoint applications including IPTV, video distribution, and collaborative services.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Network Time Synchronization</h3>
                  <p className="text-gray-700">
                    Precision Time Protocol (PTP) and Network Time Protocol (NTP) enable sub-microsecond clock synchronization for applications requiring precise timing correlation.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-600">MPLS Integration</h3>
                  <p className="text-gray-700">
                    Carrier Ethernet services can be transported over MPLS-TP backbone networks, combining packet efficiency with circuit-like service semantics.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Connection Oriented Ethernet (CoE)</h3>
                  <p className="text-gray-700">
                    Explicit virtual connection establishment and teardown procedures enable fine-grained service management with on-demand provisioning capabilities.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-600">Service Level Management</h3>
                  <p className="text-gray-700">
                    Automated provisioning, monitoring, and SLA enforcement through management platforms ensure consistent service delivery and rapid issue resolution.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-orange-600">Transparent LAN Services</h3>
                  <p className="text-gray-700">
                    Complete preservation of customer MAC frames and VLAN tags enables transparent network extension where customer LAN appears unchanged at remote sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bandwidth & Performance */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg shadow-lg p-12 border border-amber-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Bandwidth Hierarchy & Performance</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-amber-600">Standard Carrier Ethernet Rates</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>10 Mbps / 100 Mbps:</strong> Small office/remote locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>1 Gbps:</strong> Enterprise and data center networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>10 Gbps:</strong> Metropolitan backbone and core networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-3">•</span>
                    <span><strong>40/100 Gbps:</strong> Ultra-high-capacity core infrastructure</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-600">Typical Performance Characteristics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">•</span>
                    <span><strong>Latency:</strong> 1-50ms (network dependent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">•</span>
                    <span><strong>Jitter:</strong> &lt;5ms (under normal conditions)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">•</span>
                    <span><strong>Packet Loss:</strong> &lt;0.1% (99.9% delivery)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">•</span>
                    <span><strong>Availability:</strong> 99.99% - 99.999% uptime</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Technology Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-600 bg-amber-100">
                    <th className="text-left py-3 px-4 font-bold">Characteristic</th>
                    <th className="text-left py-3 px-4 font-bold">Carrier Ethernet</th>
                    <th className="text-left py-3 px-4 font-bold">Best-Effort Internet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><strong>Bandwidth Guarantees</strong></td>
                    <td className="py-3 px-4">Committed & Peak rates</td>
                    <td className="py-3 px-4">Variable/Best-effort</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4"><strong>QoS Predictability</strong></td>
                    <td className="py-3 px-4">Deterministic SLAs</td>
                    <td className="py-3 px-4">No guarantees</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><strong>Service Levels</strong></td>
                    <td className="py-3 px-4">Contractual commitments</td>
                    <td className="py-3 px-4">None</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4"><strong>Latency Control</strong></td>
                    <td className="py-3 px-4">Bounded maximum</td>
                    <td className="py-3 px-4">Unbounded variation</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4"><strong>Traffic Isolation</strong></td>
                    <td className="py-3 px-4">Per-service VLAN/EVC</td>
                    <td className="py-3 px-4">No isolation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4"><strong>Cost Model</strong></td>
                    <td className="py-3 px-4">Premium for guarantee</td>
                    <td className="py-3 px-4">Economy pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-6xl mx-auto py-16 px-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Ideal Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-amber-600">Telecommunications Operators</h3>
                <p className="text-gray-700">Service providers offering scalable, cost-effective transport with SLA guarantees to enterprise customers and other carriers</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Enterprise Networks</h3>
                <p className="text-gray-700">Multi-location organizations requiring guaranteed WAN connectivity with simplified management and predictable performance</p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-amber-600">Data Center Networking</h3>
                <p className="text-gray-700">Cloud and hosting providers requiring high-speed, deterministic inter-facility connectivity and customer-facing network services</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-orange-600">Content Distribution</h3>
                <p className="text-gray-700">Media and entertainment networks distributing IPTV, video streaming, and multicast content with QoS guarantees</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
