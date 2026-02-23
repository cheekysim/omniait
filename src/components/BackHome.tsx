import Link from "next/link";
import { Home, ChevronLeft } from "lucide-react";

export default function BackHome() {
  return (
    <Link
      href="/"
      className="absolute z-20 top-0 left-0 m-4 group inline-flex items-center rounded-full border-2 border-white bg-black/50 p-1 text-white backdrop-blur-sm"
    >
      <span className="relative flex size-8 items-center justify-center transition-all duration-300 group-hover:duration-500 ease-out group-hover:size-9">
        <Home className="absolute size-4 opacity-100 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:rotate-90 rotate-0" />
        <ChevronLeft className="absolute size-4 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 -rotate-90 group-hover:rotate-0" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 group-hover:mr-4 text-sm transition-all duration-300 group-hover:duration-500 ease-out group-hover:max-w-40 group-hover:pl-2 flex items-center justify-center">
        Back Home
      </span>
    </Link>
  );
}
