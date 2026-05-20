"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

export default function Footer() {
  return (
    <section className="border-t border-border flex items-center justify-center flex-col px-8 backdrop-blur-sm">
      <footer className="relative w-full py-4 text-center text-muted-foreground grid md:grid-cols-3 place-items-center gap-4 container">
        {/* Contact */}
        <ul className="text-start">
          <li className="font-bold text-lg">Omnia Information Technology</li>
          <li className="text-muted text-sm">Company Number: 15838574</li>
          <li>14 Honddu Close, Caldicot, NP26 4PU</li>
          <li className="font-bold">
            Email: <a href="mailto:euan@omniait.co.uk">Euan@omniait.co.uk</a>
          </li>
          <li className="font-bold">
            Phone: <a href="tel:+447922022877">+44 7922 022877</a>
          </li>
        </ul>
        {/* Quick Links */}
        <div className="grid gap-4 grid-cols-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button variant="outline" size="sm" disabled>
            {/* <Link href="/about">About Us</Link> */}
            About Us
          </Button>
          <Button variant="outline" size="sm" disabled>
            {/* <Link href="/contact">Contact</Link> */}
            Contact
          </Button>
        </div>
        {/* Socials */}
        <div className="flex flex-col items-center justify-center">
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.facebook.com/profile.php?id=61572063380120 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Facebook</title>
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Decorative dividers for desktop columns */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-4 left-1/3 hidden -translate-x-1/2 md:block"
        >
          <Separator orientation="vertical" className="h-full" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-4 left-2/3 hidden -translate-x-1/2 md:block"
        >
          <Separator orientation="vertical" className="h-full" />
        </div>
      </footer>
      <div className="container border-t border-border py-4 flex flex-col md:flex-row items-center justify-between text-muted-foreground">
        &copy; {new Date().getFullYear()} Omnia IT. All rights reserved.
        {/* Policies */}
        <div className="flex justify-center items-center">
          <Button variant="link" size="sm" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button variant="link" size="sm" asChild>
            <Link href="/tos">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
