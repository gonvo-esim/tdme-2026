import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MPLSTPPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">MPLS-TP</h1>
            <p className="text-xl">Multiprotocol Label Switching - Transport Profile for Modern Carrier Networks</p>
          </div>
        </section>

        {/* Transmission Menu Navigation */}
        <section className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="max-w-6xl mx-auto flex gap-6 text-lg font-medium">
            <Link href="/transmission/mpls-tp" className="text-blue-800 border-b-2 border-blue-600 pb-1">MPLS-TP</Link>
            <Link href="/transmission/sdh-sonet" className="text-blue-600 hover:text-blue-800 underline">SDH-SONET</Link>
            <Link href="/transmission/carrier-ethernet" className="text-blue-600 hover:text-blue-800 underline">Carrier Ethernet</Link>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              Multiprotocol Label Switching - Transport Profile (MPLS-TP) represents a packet-based transport architecture designed specifically for carrier-grade networks requiring deterministic service delivery. MPLS-TP combines the efficiency and flexibility of packet-based forwarding with the operational characteristics and protection mechanisms traditionally associated with circuit-oriented transport technologies.
            </p>
            <p className="text-lg text-gray-700">
              MPLS-TP is standardized through the Internet Engineering Task Force (IETF) and provides an alternative transport solution that bridges the gap between legacy SDH/SONET networks and modern packet-based infrastructure, offering carrier operators enhanced flexibility without compromising reliability or service quality.
            </p>
          </div>
        </section>

        {/* Key Characteristics */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Core Characteristics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">Packet-Based Transport</h3>
                <p className="text-gray-700 mb-4">
                  MPLS-TP operates at Layer 2.5, enabling efficient forwarding of variable-length packets through label-based switching rather than traditional IP routing, providing reduced overhead and improved performance compared to pure IP networks.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Hardware-accelerated label switching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Support for variable-length packets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Efficient bandwidth utilization</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Carrier-Grade Operations</h3>
                <p className="text-gray-700 mb-4">
                  MPLS-TP incorporates operational concepts from carrier networks ensuring compatibility with existing telecommunications infrastructure and operational procedures.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <span>Circuit-like service semantics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <span>Deterministic service delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-3">•</span>
                    <span>Operator-friendly management interfaces</span>
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
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Point-to-Point (P2P)</h3>
                <p className="text-gray-700 mb-4">
                  Unidirectional or bidirectional virtual connections between two endpoint nodes with fixed bandwidth allocation and dedicated forwarding paths.
                </p>
                <p className="text-sm text-gray-600">Use case: Leased line replacement, VPN connectivity</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Point-to-Multipoint (P2MP)</h3>
                <p className="text-gray-700 mb-4">
                  Single source transmits to multiple destination nodes via a shared tree structure with efficient bandwidth utilization across common segments.
                </p>
                <p className="text-sm text-gray-600">Use case: Broadcast, multicast applications, video distribution</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold mb-3 text-pink-600">Multipoint-to-Multipoint (MP2MP)</h3>
                <p className="text-gray-700 mb-4">
                  Bidirectional communication between multiple endpoints with automatic forwarding tree construction and traffic replication.
                </p>
                <p className="text-sm text-gray-600">Use case: Virtual LAN extensions, collaborative networks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Traffic Engineering */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Traffic Engineering & Optimization</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              MPLS-TP provides sophisticated traffic engineering capabilities enabling network operators to optimize resource utilization and control traffic distribution:
            </p>

            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Explicit Route Control (ERO)</h3>
                <p className="text-gray-700">
                  Network administrators specify explicit forwarding paths for individual MPLS-TP circuits, enabling precise control over traffic routing and load distribution across network resources.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Bandwidth Management</h3>
                <p className="text-gray-700">
                  Per-circuit bandwidth reservation with constraint-based routing ensures that new circuits are placed only on network segments with sufficient available capacity, preventing oversubscription.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-600">Path Optimization</h3>
                <p className="text-gray-700">
                  Automatic path selection algorithms balance network load across available routes, optimizing latency, reducing congestion, and improving overall network efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo-600">QoS Integration</h3>
                <p className="text-gray-700">
                  Quality-of-service parameters are bound to individual MPLS-TP circuits, ensuring consistent performance characteristics regardless of other network traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protection & Restoration */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Protection & Restoration Mechanisms</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Fast Reroute (FRR)</h3>
                <p className="text-gray-700 mb-4">
                  Local protection mechanism where alternate pre-computed paths are activated immediately upon link failure detection, with recovery times measured in milliseconds.
                </p>
                <h4 className="text-lg font-bold mb-2 text-gray-800">Protection Types:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Link Protection:</strong> Bypass alternate paths for failed links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Node Protection:</strong> Bypass alternate paths for failed nodes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Path Protection</h3>
                <p className="text-gray-700 mb-4">
                  End-to-end protection using completely disjoint working and protection paths computed at provisioning time, providing complete backup redundancy.
                </p>
                <h4 className="text-lg font-bold mb-2 text-gray-800">Characteristics:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>1:1 or 1+1 protection models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Simultaneous traffic transmission or standby mode</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span>Deterministic recovery characteristics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg border border-purple-200 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Ring Protection</h3>
                <p className="text-gray-700">
                  Ring-based topologies incorporate inherent protection through bidirectional counter-rotating paths, enabling selective protection per circuit with bandwidth optimization. Compatible with SDH-SONET SNCP concepts, MPLS-TP ring protection provides automated failover within the ring topology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OAM Capabilities */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Operations, Administration & Maintenance (OAM)</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              MPLS-TP incorporates comprehensive OAM functions inspired by SDH/SONET, providing in-band performance monitoring and fault detection:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-indigo-600">Fault Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Continuity check (CC) - detection of path connectivity failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Remote defect indication (RDI) - notification of remote path failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Path verification - validation of correct path traversal</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-indigo-600">Performance Monitoring</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Packet loss measurement (LM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>One-way and round-trip delay measurement (DM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Jitter and packet variation analysis</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 md:col-span-2">
                <h3 className="text-xl font-bold text-indigo-600">Diagnostic Functions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Loopback testing - isolation and diagnosis of path problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Route tracing - determination of actual forwarding paths</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <span>Alarm indication signals (AIS) - fault notification propagation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Multiservice Support */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Multiservice Traffic Support</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              MPLS-TP provides a unified transport platform for diverse traffic types:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Traditional TDM/PDH</h3>
                <p className="text-gray-700 mb-3">
                  Transport of legacy E1/T1 and E3/T3 circuits with transparent pseudowire encapsulation, enabling seamless integration with existing telecommunications infrastructure.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• E1/T1 voice and signaling</li>
                  <li>• CAS and PRI signalization</li>
                  <li>• E3/T3 trunk circuits</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-purple-600">ATM & Frame Relay</h3>
                <p className="text-gray-700 mb-3">
                  Pseudowire transport of ATM cells and Frame Relay frames preserving original protocol semantics and performance characteristics.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• ATM cell transport</li>
                  <li>• Frame Relay DLCI transport</li>
                  <li>• Protocol transparency</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-green-600">Ethernet Services</h3>
                <p className="text-gray-700 mb-3">
                  Native Ethernet packet transport with support for various service models and advanced Layer 2 switching capabilities.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Raw Ethernet frame transport</li>
                  <li>• VLAN preservation and manipulation</li>
                  <li>• MAC-based switching</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">IP/MPLS Traffic</h3>
                <p className="text-gray-700 mb-3">
                  Native IP packet routing and MPLS tunnel support within MPLS-TP infrastructure for converged network operation.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• IPv4 and IPv6</li>
                  <li>• MPLS label stacking</li>
                  <li>• QoS preservation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with SDH/SONET */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-lg p-12 border border-indigo-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">MPLS-TP vs. SDH/SONET</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-gray-700">
                <thead>
                  <tr className="border-b-2 border-indigo-600 bg-indigo-100">
                    <th className="text-left py-3 px-4 font-bold">Characteristic</th>
                    <th className="text-left py-3 px-4 font-bold">MPLS-TP</th>
                    <th className="text-left py-3 px-4 font-bold">SDH/SONET</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-indigo-200">
                    <td className="py-3 px-4"><strong>Protocol Type</strong></td>
                    <td className="py-3 px-4">Packet-based (Layer 2.5)</td>
                    <td className="py-3 px-4">Circuit-based (Layer 1)</td>
                  </tr>
                  <tr className="border-b border-indigo-200 bg-gray-50">
                    <td className="py-3 px-4"><strong>Bandwidth Efficiency</strong></td>
                    <td className="py-3 px-4">Variable packet sizes, high efficiency</td>
                    <td className="py-3 px-4">Fixed timeslots, deterministic</td>
                  </tr>
                  <tr className="border-b border-indigo-200">
                    <td className="py-3 px-4"><strong>Synchronization</strong></td>
                    <td className="py-3 px-4">Optional (for TDM services)</td>
                    <td className="py-3 px-4">Mandatory (core function)</td>
                  </tr>
                  <tr className="border-b border-indigo-200 bg-gray-50">
                    <td className="py-3 px-4"><strong>Protection</strong></td>
                    <td className="py-3 px-4">FRR, Path protection, Ring</td>
                    <td className="py-3 px-4">MSP, SNCP, MS-SPRing</td>
                  </tr>
                  <tr className="border-b border-indigo-200">
                    <td className="py-3 px-4"><strong>OAM</strong></td>
                    <td className="py-3 px-4">Inspired by SDH/SONET</td>
                    <td className="py-3 px-4">In-band overhead channels</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4"><strong>Legacy Support</strong></td>
                    <td className="py-3 px-4">Via pseudowires</td>
                    <td className="py-3 px-4">Native (primary design goal)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">MPLS-TP Advantages</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Flexible bandwidth utilization with variable-length packets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Simplified network architecture (single technology stack)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Rapid service provisioning and modification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-3">✓</span>
                  <span>Enhanced multicast and P2MP capabilities</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span>Sophisticated traffic engineering and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span>Carrier-grade OAM and fault management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span>Legacy protocol support via pseudowires</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span>Future-proof technology aligned with packet networking trends</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-6xl mx-auto py-16 px-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Ideal Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">Carrier Networks</h3>
                <p className="text-gray-700">Next-generation carrier networks replacing SDH/SONET infrastructure with packet-based technology while maintaining operational procedures</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-purple-600">Metropolitan Networks</h3>
                <p className="text-gray-700">Metro and regional networks requiring flexible bandwidth allocation and simplified management compared to traditional circuit switching</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-green-600">Hybrid Environments</h3>
                <p className="text-gray-700">Networks supporting mixed traffic types (TDM, Ethernet, IP) requiring unified transport platform and consistent management</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">Enterprise & Data Centers</h3>
                <p className="text-gray-700">Large enterprises and data center operators requiring high-performance deterministic networks with advanced multicast capabilities</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
