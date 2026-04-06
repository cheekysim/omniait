import type { Metadata } from "next";

export const siteConfig = {
  name: "Omnia IT",
  description:
    "Omnia IT is a professional web development agency creating high-performance, modern websites and applications for businesses.",
  url: "https://omniait.co.uk",
  // Place a 1200×630 PNG at /public/og-image.png to enable rich social previews.
  ogImage: "/og-image.png",
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | Omnia IT",
    default: "Omnia IT – Web Development Agency",
  },
  description: siteConfig.description,
  keywords: [
    "web development",
    "web design",
    "Omnia IT",
    "IT agency",
    "business websites",
    "Next.js",
    "SvelteKit",
    "responsive design",
    "SEO",
  ],
  authors: [{ name: "Omnia IT", url: siteConfig.url }],
  creator: "Omnia IT",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Omnia IT – Web Development Agency",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Omnia IT – Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnia IT – Web Development Agency",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@omniait",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const homeMetadata: Metadata = {
  title: "Omnia IT – Web Development Agency",
  description:
    "Welcome to Omnia IT. We build beautiful, high-performance websites for businesses. Explore our portfolio including The Passport Expert and The Friendly Fox.",
  openGraph: {
    ...rootMetadata.openGraph,
    title: "Omnia IT – Web Development Agency",
    description:
      "Welcome to Omnia IT. We build beautiful, high-performance websites for businesses. Explore our portfolio including The Passport Expert and The Friendly Fox.",
    url: siteConfig.url,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: "Omnia IT – Web Development Agency",
    description:
      "Welcome to Omnia IT. We build beautiful, high-performance websites for businesses. Explore our portfolio including The Passport Expert and The Friendly Fox.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const projectsMetadata: Metadata = {
  title: "Projects",
  description:
    "Explore Omnia IT's portfolio of professional web development projects including The Passport Expert, The Friendly Fox, KissedToge, and Conservatory Solutions Wales.",
  openGraph: {
    ...rootMetadata.openGraph,
    title: "Projects | Omnia IT",
    description:
      "Explore Omnia IT's portfolio of professional web development projects including The Passport Expert, The Friendly Fox, KissedToge, and Conservatory Solutions Wales.",
    url: `${siteConfig.url}/projects`,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: "Projects | Omnia IT",
    description:
      "Explore Omnia IT's portfolio of professional web development projects including The Passport Expert, The Friendly Fox, KissedToge, and Conservatory Solutions Wales.",
  },
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};
