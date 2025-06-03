import { Card, CardContent } from "@/components/ui/card"
import { Hotel } from "lucide-react"

export default function HotelsTab() {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8 text-center">
        <Hotel className="h-12 w-12 text-orange-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Hotel Search</h3>
        <p className="text-gray-600">Search for flights first to see available hotels at your destination.</p>
      </CardContent>
    </Card>
  )
}
