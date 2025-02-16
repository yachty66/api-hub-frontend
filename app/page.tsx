import Header from "@/components/header"
import LandingPage from "@/components/landing-page"
import ApiList from "@/components/api-list"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <LandingPage />
        <ApiList />
      </main>
      <Footer />
    </div>
  )
}