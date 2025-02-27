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
  {
    name: "AI Photo Restoration API",
    description:
      "Transform your degraded images into high-quality, restored versions using AI technology",
    customIcon: (
      <Image
        src="/ai-photo-restoration-api-logo.png"
        alt="AI Photo Restoration API"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    href: "/apis/ai-photo-restoration-api",
  },
];

export default function ApiList() {
  return (
    <section id="apis" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apis.map((api) => (
            <Link key={api.href} href={api.href} className="block">
              <div className="h-full border border-white/10 rounded-lg bg-black hover:bg-white/5 transition-colors">
                <div className="p-8">
                  {api.customIcon}
                  <h2 className="text-2xl font-bold mb-2">{api.name}</h2>
                  <p className="text-gray-400 mb-4">{api.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
