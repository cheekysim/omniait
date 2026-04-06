interface SEOProps {
  jsonLd: Record<string, unknown>;
}

export default function SEO({ jsonLd }: SEOProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
