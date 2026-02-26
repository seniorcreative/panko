import Link from "next/link";
import { aldrich } from "./fonts";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="text-center max-w-md">
        <h1 className={`${aldrich.className} text-6xl text-gray-900 mb-4`}>
          404
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          This page doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className={`${aldrich.className} px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors`}
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
