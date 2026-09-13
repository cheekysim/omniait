import React from "react";
import SEO from "@/components/SEO";
import { aboutMetadata, siteConfig } from "@/lib/metadata";

export const metadata = aboutMetadata;

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Omnia IT",
  description:
    "Omnia IT is an independent web development agency run by Euan Bell from Caldicot, South Wales, building modern, high-performance websites and web applications for businesses.",
  url: `${siteConfig.url}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Omnia IT",
    legalName: "Omnia Information Technology",
    email: "euan@omniait.co.uk",
    telephone: "+44 7922 022877",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Honddu Close",
      addressLocality: "Caldicot",
      postalCode: "NP26 4PU",
      addressCountry: "GB",
    },
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <><SEO jsonLd={aboutJsonLd} />{children}</>;
}