import type { ReactNode } from "react";

import SEO from "@/components/SEO";
import { aboutMetadata, siteConfig } from "@/lib/metadata";

export const metadata = aboutMetadata;

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Omnia IT",
  description: "Learn about Omnia IT, an independent web development agency based in Caldicot, South Wales.",
  url: `${siteConfig.url}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "Omnia IT",
    legalName: "Omnia Information Technology",
    identifier: "15838574",
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

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <><SEO jsonLd={aboutJsonLd} />{children}</>;
}
