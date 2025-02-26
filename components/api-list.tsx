import { BarChart, CreditCard, MessageSquare, HardDrive } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const apis = [
  {
    name: "Premium AI Image Upscaler API",
    description: "Transform your images into high-quality, enhanced versions",
    customIcon: (
      <Image
        src="/premium-image-upscaling-api-logo.png"
        alt="Premium AI Image Upscaler"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    href: "/apis/premium-ai-image-upscaler-api",
  },
];

export default function ApiList() {
  return (
    <section id="apis" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our APIs</h2>
        <div className="grid grid-cols-1 gap-8">
          <Link
            href="/apis/premium-ai-image-upscaler-api"
            className="block w-fit"
          >
            <div className="border border-white/10 rounded-lg bg-black hover:bg-white/5 transition-colors">
              <div className="p-8">
                <Image
                  src="/premium-image-upscaling-api-logo.png"
                  alt="Premium AI Image Upscaler API Logo"
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">
                  Premium AI Image Upscaler API
                </h2>
                <p className="text-gray-400 mb-4">
                  Transform your images into high-quality, enhanced versions
                </p>
                <div className="flex items-center text-sm">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
