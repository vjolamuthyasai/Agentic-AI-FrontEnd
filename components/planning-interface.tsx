import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import FlightDetails from "@/components/flight-details"
import HotelDetails from "@/components/hotel-details"

interface PlanningInterfaceProps {
  useFlightDestination: boolean
  setUseFlightDestination: (value: boolean) => void
}

export default function PlanningInterface({ useFlightDestination, setUseFlightDestination }: PlanningInterfaceProps) {
  return (
    <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <FlightDetails />
          <HotelDetails useFlightDestination={useFlightDestination} setUseFlightDestination={setUseFlightDestination} />
        </div>

        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
