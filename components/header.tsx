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
            alt="API Hub Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span>API Hub</span>
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
                href="#apis"
                className="hover:text-gray-300 transition-colors"
              >
                APIs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Documentation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
