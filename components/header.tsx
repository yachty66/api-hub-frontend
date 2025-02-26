import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold flex items-center space-x-3"
        >
          <Image
            src="/logo.png"
            alt="API Lexica Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span>API Lexica</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#apis"
                className="hover:text-gray-300 transition-colors"
                scroll={true}
              >
                APIs
              </Link>
            </li>
            <li>
              <Link
                href="/#talk-to-us"
                className="hover:text-gray-300 transition-colors"
                scroll={true}
              >
                Talk to Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
