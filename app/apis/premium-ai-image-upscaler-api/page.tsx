"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function AIImageUpscalerAPI() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-black/50 border-b border-white/10">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image
                src="/premium-image-upscaling-api-logo.png"
                alt="API Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <h1 className="text-5xl font-bold">
                Premium AI Image Upscaler API
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Transform your images into high-quality, enhanced versions with
              improved resolution and clarity.
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors"
              size="lg"
              asChild
            >
              <a
                href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/premium-ai-image-upscaler-api1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try for Free
              </a>
            </Button>
          </div>
        </section>

        {/* API Data Samples */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6">
              API Data Samples
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16">
              Response data samples of the different kinds of objects the API
              provides
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 bg-black text-left flex justify-between items-center group hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-lg font-semibold group-hover:text-gray-300">
                    Image Upscaling
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="p-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Before</h3>
                        <Image
                          src="https://storage.googleapis.com/apihub85/0_1.webp"
                          alt="Before upscaling"
                          width={400}
                          height={400}
                          className="rounded-lg w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">After</h3>
                        <Image
                          src="https://storage.googleapis.com/apihub85/upscaled_image.png"
                          alt="After upscaling"
                          width={400}
                          height={400}
                          className="rounded-lg w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* API Docs Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6">
              API Docs & Code Examples
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400 text-center mb-16">
                Please find our API docs and try the API on the{" "}
                <a
                  href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/premium-ai-image-upscaler-api1"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RapidAPI Playground
                </a>
                . Code samples are available for all language and frameworks -
                JavaScript / Node.js, Python, PHP, Swift, and more:
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
              <Image
                src="/js.png"
                alt="JavaScript"
                width={80}
                height={80}
                className="mx-auto"
              />
              <Image
                src="/python.png"
                alt="Python"
                width={80}
                height={80}
                className="mx-auto"
              />
              <Image
                src="/nodejs.png"
                alt="Node.js"
                width={80}
                height={80}
                className="mx-auto"
              />
              <Image
                src="/php.png"
                alt="PHP"
                width={80}
                height={80}
                className="mx-auto"
              />
              <Image
                src="/swift.svg"
                alt="Swift"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
