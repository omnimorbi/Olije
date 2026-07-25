export default function IndustriesOverviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Industries Overview</h1>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-600 pl-6 py-4">
          <h2 className="text-2xl font-semibold mb-2">Oil & Gas Sector</h2>
          <p className="text-gray-600">We lead innovations in exploration, production, and distribution</p>
        </div>
        <div className="border-l-4 border-green-600 pl-6 py-4">
          <h2 className="text-2xl font-semibold mb-2">Renewable Energy</h2>
          <p className="text-gray-600">Investing in sustainable and clean energy solutions</p>
        </div>
        <div className="border-l-4 border-yellow-600 pl-6 py-4">
          <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
          <p className="text-gray-600">Building critical infrastructure for tomorrow</p>
        </div>
      </div>
    </div>
  );
}
