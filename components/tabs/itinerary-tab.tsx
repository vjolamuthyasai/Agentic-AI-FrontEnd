import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function ItineraryTab() {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8 text-center">
        <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Your Itinerary</h3>
        <p className="text-gray-600">Your complete travel itinerary will appear here.</p>
      </CardContent>
    </Card>
  )
}
