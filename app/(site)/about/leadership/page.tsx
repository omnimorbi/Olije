export default function AboutLeadershipPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Leadership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <div className="bg-gray-300 h-48 rounded mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">CEO</h3>
          <p className="text-gray-600">Leading vision and strategy</p>
        </div>
        <div className="border rounded-lg p-6">
          <div className="bg-gray-300 h-48 rounded mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">COO</h3>
          <p className="text-gray-600">Operations and execution</p>
        </div>
      </div>
    </div>
  );
}
