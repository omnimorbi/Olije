export const metadata = {
  title: "Services - Olije",
  description: "Explore our comprehensive services",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Energy Solutions</h2>
            <p className="text-gray-600">Comprehensive energy solutions for global markets</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
            <p className="text-gray-600">Building critical infrastructure projects</p>
          </div>
        </div>
      </div>
    </main>
  );
}
