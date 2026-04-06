import { Nunito } from "next/font/google";
import "./globals.css";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

import { rootMetadata } from "@/lib/metadata";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
