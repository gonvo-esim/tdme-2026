import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SecurityPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Security & Access Control</h1>
            <p className="text-xl">Control your environment and know who comes, when they come, and what they do</p>
          </div>
        </section>

        {/* Overview */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Security Solutions</h2>
            <p className="text-lg text-gray-700 mb-8">
              Security is paramount in today's world. TDME provides integrated security and access control solutions that give you complete visibility and control over who enters your facilities, when they access them, and what activities occur within your premises.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg">Our Solutions</h2>
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
                  <li><strong>Real-time Monitoring:</strong> Live feeds from multiple cameras and sensors</li>
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
                  <li><strong>Centralized Management:</strong> Single dashboard for all security systems</li>
                  <li><strong>Alert Notification:</strong> Real-time alerts for security events</li>
                  <li><strong>Incident Response:</strong> Automated and manual response protocols</li>
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
                <p className="text-gray-700">Know exactly who is in your facility at any given time with detailed access logs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Mobile Access</h3>
                <p className="text-gray-700">Control and monitor your security systems from anywhere using mobile applications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Real-time Alerts</h3>
                <p className="text-gray-700">Instant notifications for any security events or unauthorized access attempts</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Advanced Analytics</h3>
                <p className="text-gray-700">AI-powered analysis to detect patterns and predict potential security threats</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Integration</h3>
                <p className="text-gray-700">Seamlessly integrate with existing building management and IT systems</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-red-700 mb-4">📋</div>
                <h3 className="text-xl font-bold mb-2 text-red-700">Compliance</h3>
                <p className="text-gray-700">Meet regulatory requirements with detailed audit trails and reporting</p>
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
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-700">Public Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Airports and transportation hubs</li>
                  <li>✓ Government buildings</li>
                  <li>✓ Healthcare facilities</li>
                  <li>✓ Educational institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
