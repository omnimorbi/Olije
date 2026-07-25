export const metadata = {
  title: "Careers - Olije",
  description: "Join our team at Olije",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Careers at Olije</h1>
        <p className="text-lg text-gray-700 mb-6">
          We're always looking for talented professionals to join our team.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          View Open Positions
        </button>
      </div>
    </main>
  );
}
