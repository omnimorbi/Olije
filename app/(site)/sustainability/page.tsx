export default function SustainabilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Sustainability</h1>
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          At Olije, sustainability is at the core of everything we do. We are committed to environmental
          responsibility, social impact, and economic value creation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Environmental</h3>
            <p className="text-gray-600">Reducing carbon footprint and promoting clean energy</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Social</h3>
            <p className="text-gray-600">Supporting communities and creating employment</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Economic</h3>
            <p className="text-gray-600">Delivering sustainable economic growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}
