"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function AIImageUpscalerAPI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-black/50 border-b border-white/10">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Premium AI Image Upscaler API
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Transform your images into high-quality, enhanced versions with
              improved resolution and clarity.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white/10"
            >
              Try for Free
            </Button>
          </div>
        </section>

        {/* API Data Samples */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              API Data Samples
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Response data samples of the different kinds of objects the API
              provides
            </p>

            <div className="max-w-3xl mx-auto">
              <button
                className="w-full p-6 bg-black border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-left flex justify-between items-center group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-lg font-semibold group-hover:text-gray-300">
                  Image Upscaling
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
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
              </button>

              {isOpen && (
                <div className="mt-4 p-6 border border-white/10 rounded-lg">
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
