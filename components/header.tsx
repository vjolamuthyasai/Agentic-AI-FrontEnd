import { Plane } from "lucide-react"

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Plane className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">AI-Powered Travel Planner</h1>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Find flights, hotels, and get personalized recommendations with AI. Create your perfect travel itinerary in
        seconds.
      </p>
    </div>
  )
}
