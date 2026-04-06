import Hero from "@/components/sections/Hero";
import Description from "@/components/sections/Projects";
import SEO from "@/components/SEO";
import { homeMetadata, siteConfig } from "@/lib/metadata";

export const metadata = homeMetadata;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/logo.png`,
};

export default function Home() {
  return (
    <>
      <SEO jsonLd={organizationJsonLd} />
      <Hero />
      <div className="w-full h-2 bg-white"></div>
      <Description />
    </>
  );
}
