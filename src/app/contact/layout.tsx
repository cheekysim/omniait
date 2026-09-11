import React from "react";
import SEO from "@/components/SEO";
import { contactMetadata, siteConfig } from "@/lib/metadata";

export const metadata = contactMetadata;

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Omnia IT",
  description: "Get in touch with Omnia IT about your next digital project.",
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Omnia IT",
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <><SEO jsonLd={contactJsonLd} />{children}</>;
}
