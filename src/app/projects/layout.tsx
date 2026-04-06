import React from "react";
import SEO from "@/components/SEO";
import { projectsMetadata, siteConfig } from "@/lib/metadata";

export const metadata = projectsMetadata;

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Omnia IT Portfolio",
  description:
    "A showcase of professional web development projects by Omnia IT.",
  url: `${siteConfig.url}/projects`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "WebSite",
        name: "The Passport Expert",
        url: "https://thepassportexpert.co.uk",
        description:
          "A comprehensive multi-page website built with SvelteKit for a UK passport services business.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "WebSite",
        name: "The Friendly Fox",
        url: "https://friendly-fox.co.uk",
        description:
          "A vibrant community website for a local pub in Newport, featuring event calendars and mobile booking.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "WebSite",
        name: "KissedToge",
        url: "https://kissedtoge.live",
        description:
          "A sophisticated web application with real-time features and secure user authentication.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "WebSite",
        name: "Conservatory Solutions Wales",
        url: "https://conservatorysolutionswales.co.uk",
        description:
          "A professional, conversion-focused website for a premium conservatory services company in Wales.",
      },
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEO jsonLd={portfolioJsonLd} />
      {children}
    </>
  );
}
