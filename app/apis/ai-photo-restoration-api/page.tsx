"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function AIPhotoRestorationAPI() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main
        className="flex-grow"
        itemScope
        itemType="https://schema.org/SoftwareApplication"
      >
        {/* Hero Section */}
        <section className="py-20 px-4 border-b border-white/10">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image
                src="/ai-photo-restoration-api-logo.png"
                alt="AI Photo Restoration API Logo"
                width={80}
                height={80}
                className="rounded-lg"
                itemProp="image"
              />
              <h1 className="text-5xl font-bold" itemProp="name">
                AI Photo Restoration API
              </h1>
            </div>
            <p
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              itemProp="description"
            >
              Transform your degraded images into high-quality, restored
              versions using AI technology. Our advanced restoration algorithms
              bring new life to old or damaged photos.
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <Button
                className="bg-white text-black hover:bg-gray-200 transition-colors"
                size="lg"
                asChild
              >
                <a
                  href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/ai-photo-restoration-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="url"
                >
                  Try API for Free
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* API Data Samples */}
        <section className="py-16 px-4" itemProp="workExample">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              See the API in Action
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Real examples of photo restoration results using our API
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 bg-black text-left flex justify-between items-center group hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold group-hover:text-gray-300">
                    Photo Restoration Example
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                        <h3 className="text-lg font-semibold">
                          Original Image
                        </h3>
                        <Image
                          src="https://api-lexica.s3.us-east-1.amazonaws.com/examples/0014.jpg"
                          alt="Original degraded photo before restoration"
                          width={400}
                          height={400}
                          className="rounded-lg w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">
                          Restored Result
                        </h3>
                        <Image
                          src="https://api-lexica.s3.amazonaws.com/ai-photo-restoration-api/baa747c8-e5d3-43b3-b436-d4ff7ed8bdee.png"
                          alt="Enhanced photo after AI restoration"
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

        {/* Key Features Section */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features of Our Photo Restoration API
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Advanced Restoration
                </h3>
                <p className="text-gray-400">
                  State-of-the-art AI algorithms that restore and enhance old or
                  damaged photos with exceptional quality.
                </p>
              </div>
              <div className="p-6 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Simple Integration
                </h3>
                <p className="text-gray-400">
                  Easy to integrate with a single API endpoint and
                  straightforward authentication through RapidAPI.
                </p>
              </div>
              <div className="p-6 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Fast Processing</h3>
                <p className="text-gray-400">
                  Quick processing times after initial cold start, perfect for
                  batch restoration needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Easy Integration
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400 text-center mb-8">
                Please find our API docs and try the API on the{" "}
                <a
                  href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/ai-photo-restoration-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 hover:underline"
                >
                  RapidAPI Playground
                </a>
                . Code samples are available for all languages and frameworks -
                JavaScript / Node.js, Python, PHP, Swift, and more:
              </p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
                <Image
                  src="/js.png"
                  alt="JavaScript SDK available"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <Image
                  src="/python.png"
                  alt="Python SDK available"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <Image
                  src="/nodejs.png"
                  alt="Node.js SDK available"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <Image
                  src="/php.png"
                  alt="PHP SDK available"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <Image
                  src="/swift.svg"
                  alt="Swift SDK available"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Plans and Pricing
            </h2>
            <p className="text-center text-gray-400 mb-12">
              If the plans below do not meet your needs, please{" "}
              <a
                href="mailto:support@apilexica.com"
                className="text-white hover:text-gray-200 hover:underline"
              >
                contact us
              </a>{" "}
              for a custom pricing plan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Free Tier */}
              <div className="border border-white/10 rounded-2xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <div className="text-4xl font-bold mb-8">
                  $0<span className="text-lg text-gray-400">/month</span>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold mb-2">5</div>
                  <div className="text-gray-400">Requests / Month</div>
                  <div className="text-sm text-gray-500 mt-1">Hard limit</div>
                </div>

                <Button
                  className="bg-white hover:bg-gray-200 text-black transition-colors mt-auto"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/ai-photo-restoration-api/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </Button>
              </div>

              {/* Pro Tier */}
              <div className="border border-white/10 rounded-2xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-8">
                  $25<span className="text-lg text-gray-400">/month</span>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold mb-2">5,000</div>
                  <div className="text-gray-400">Requests / Month</div>
                </div>

                <Button
                  className="bg-white hover:bg-gray-200 text-black transition-colors mt-auto"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/ai-photo-restoration-api/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </Button>
              </div>

              {/* Ultra Tier */}
              <div className="border border-white/10 rounded-2xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Ultra</h3>
                <div className="text-4xl font-bold mb-8">
                  $75<span className="text-lg text-gray-400">/month</span>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold mb-2">15,000</div>
                  <div className="text-gray-400">Requests / Month</div>
                </div>

                <Button
                  className="bg-white hover:bg-gray-200 text-black transition-colors mt-auto"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/ai-photo-restoration-api/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </Button>
              </div>

              {/* Mega Tier */}
              <div className="border border-white/10 rounded-2xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Mega</h3>
                <div className="text-4xl font-bold mb-8">
                  $150<span className="text-lg text-gray-400">/month</span>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold mb-2">30,000</div>
                  <div className="text-gray-400">Requests / Month</div>
                </div>

                <Button
                  className="bg-white hover:bg-gray-200 text-black transition-colors mt-auto"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/ai-photo-restoration-api/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Restore Your Photos?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Start using our AI Photo Restoration API today and bring new life
              to your old or damaged photos.
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors"
              size="lg"
              asChild
            >
              <a
                href="https://rapidapi.com/arxivgpt-arxivgpt-default/api/ai-photo-restoration-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Free
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
