export const metadata = {
  title: "Investors - Olije",
  description: "Investor information and relations",
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Investor Relations</h1>
        <p className="text-lg text-gray-700 mb-6">
          Learn more about investing in Olije and our financial performance.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Download Investor Reports
        </button>
      </div>
    </main>
  );
}
