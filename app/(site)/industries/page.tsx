export const metadata = {
  title: "Industries - Olije",
  description: "Explore industries we serve",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Oil & Gas</h2>
            <p className="text-gray-600">Leading innovations in oil and gas sector</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Renewables</h2>
            <p className="text-gray-600">Sustainable renewable energy projects</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
            <p className="text-gray-600">Critical infrastructure development</p>
          </div>
        </div>
      </div>
    </main>
  );
}
