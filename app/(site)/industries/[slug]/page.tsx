export async function generateStaticParams() {
  return [
    { slug: 'renewable-energy' },
    { slug: 'oil-and-gas' },
    { slug: 'infrastructure' },
  ];
}

export default function IndustrySlugPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 capitalize">{params.slug.replace(/-/g, ' ')}</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          This is the detail page for {params.slug}. Here you can find specific information about this industry sector.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Information</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Overview and market analysis</li>
          <li>Our services and expertise</li>
          <li>Case studies and projects</li>
          <li>Partnership opportunities</li>
        </ul>
      </div>
    </div>
  );
}
