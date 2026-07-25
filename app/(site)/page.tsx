export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Olije</h1>
          <p className="text-xl mb-8">International Energy, Infrastructure & Investment</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Energy Solutions</h3>
            <p className="text-gray-600">Comprehensive energy solutions for global markets and sustainable development</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Infrastructure</h3>
            <p className="text-gray-600">Building critical infrastructure projects across multiple sectors</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Investment</h3>
            <p className="text-gray-600">Strategic investments in growth opportunities and emerging markets</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss your energy and infrastructure needs</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
