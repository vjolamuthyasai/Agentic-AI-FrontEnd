import { Card, CardContent } from "@/components/ui/card"
import { Brain } from "lucide-react"

export default function RecommendationsTab() {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8 text-center">
        <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
        <p className="text-gray-600">Get personalized travel recommendations powered by AI.</p>
      </CardContent>
    </Card>
  )
}
