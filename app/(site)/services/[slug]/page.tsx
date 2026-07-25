export async function generateStaticParams() {
  return [
    { slug: 'consulting' },
    { slug: 'development' },
    { slug: 'maintenance' },
  ];
}

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 capitalize">{params.slug.replace(/-/g, ' ')}</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Detailed information about {params.slug} service. We provide comprehensive solutions tailored to your needs.
        </p>
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Expert consultation and strategy</li>
          <li>Implementation and execution</li>
          <li>Ongoing support and optimization</li>
          <li>Performance monitoring and reporting</li>
        </ul>
      </div>
    </div>
  );
}
