import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to API Hub</h1>
        <p className="text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
          Discover and integrate powerful APIs to supercharge your projects. Streamline your development process with
          our curated collection of high-performance APIs.
        </p>
        <a
          href="#apis"
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors inline-flex items-center space-x-2 group"
        >
          <span>Explore APIs</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}

