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
  }
];

export default function ApiList() {
  return (
    <section id="apis" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apis.map((api, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors group"
            >
              {api.customIcon ? (
                api.customIcon
              ) : (
                <api.icon className="w-12 h-12 mb-4 text-white group-hover:text-gray-300 transition-colors" />
              )}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                {api.name}
              </h3>
              <p className="text-gray-400">{api.description}</p>
              <Link
                href={api.href}
                className="mt-4 inline-block text-white hover:text-gray-300 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
