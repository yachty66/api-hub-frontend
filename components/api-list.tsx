import { Users, BarChart, CreditCard, MessageSquare, HardDrive } from "lucide-react"

const apis = [
  { name: "User Authentication API", description: "Secure user authentication and authorization", icon: Users },
  { name: "Data Analytics API", description: "Real-time data processing and analytics", icon: BarChart },
  { name: "Payment Gateway API", description: "Seamless payment processing integration", icon: CreditCard },
  { name: "Messaging API", description: "Real-time messaging and notifications", icon: MessageSquare },
  { name: "File Storage API", description: "Cloud-based file storage and management", icon: HardDrive },
]

export default function ApiList() {
  return (
    <section id="apis" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apis.map((api, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors group">
              <api.icon className="w-12 h-12 mb-4 text-white group-hover:text-gray-300 transition-colors" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">{api.name}</h3>
              <p className="text-gray-400">{api.description}</p>
              <a href="#" className="mt-4 inline-block text-white hover:text-gray-300 transition-colors">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}