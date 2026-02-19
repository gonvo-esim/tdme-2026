import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl">We're here to help with your connectivity needs</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-6xl mx-auto py-20 px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 rounded-lg">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Headquarters</h3>
                    <p className="text-gray-700">
                      123 Connectivity Avenue<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Phone</h3>
                    <p className="text-gray-700">+1 (800) TDME-NET</p>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Email</h3>
                    <p className="text-gray-700">info@tdme.net</p>
                    <p className="text-gray-700">support@tdme.net</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday - Sunday: Closed</p>
                    <p className="text-gray-700 mt-2">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-50 py-3 px-4 rounded inline-block">Need Something Specific?</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services" className="text-blue-600 hover:text-blue-800 font-bold">
                      → View Our Services
                    </a>
                  </li>
                  <li>
                    <a href="/esim" className="text-blue-600 hover:text-blue-800 font-bold">
                      → Explore eSIMGEN
                    </a>
                  </li>
                  <li>
                    <a href="/industrial" className="text-blue-600 hover:text-blue-800 font-bold">
                      → Industrial Solutions
                    </a>
                  </li>
                  <li>
                    <a href="/security" className="text-blue-600 hover:text-blue-800 font-bold">
                      → Security Products
                    </a>
                  </li>
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
