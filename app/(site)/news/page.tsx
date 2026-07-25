export const metadata = {
  title: "News - Olije",
  description: "Latest news and updates from Olije",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Latest News</h1>
        <div className="space-y-6">
          <article className="border-l-4 border-blue-600 pl-4">
            <h2 className="text-2xl font-semibold mb-2">New Partnership Announcement</h2>
            <p className="text-gray-600">Olije announces strategic partnership with leading energy firm</p>
            <p className="text-sm text-gray-500 mt-2">July 2026</p>
          </article>
        </div>
      </div>
    </main>
  );
}
