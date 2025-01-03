// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="mb-4 text-sm leading-relaxed">
          Oops! The page you`&apos;re looking for isn`&apos;t here. It might
          have been moved or deleted.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/"
            className="rounded bg-[#FB5DA5] px-4 py-2 font-bold text-white hover:bg-[#fa4d9b] transition-colors duration-200"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="rounded bg-gray-600 px-4 py-2 font-bold text-white hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
