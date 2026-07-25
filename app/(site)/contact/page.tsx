export const metadata = {
  title: "Contact - Olije",
  description: "Get in touch with Olije",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full border rounded px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="w-full border rounded px-4 py-2 h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
