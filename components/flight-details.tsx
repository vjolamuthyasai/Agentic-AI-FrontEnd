import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plane, MapPin, Calendar } from "lucide-react"

export default function FlightDetails() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Plane className="h-5 w-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Flight Details</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="departure" className="text-sm font-medium text-gray-700">
            Departure Airport (IATA code)
          </Label>
          <div className="relative mt-1">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="departure"
              placeholder="ATL"
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              defaultValue="ATL"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="arrival" className="text-sm font-medium text-gray-700">
            Arrival Airport (IATA code)
          </Label>
          <div className="relative mt-1">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="arrival"
              placeholder="LAX"
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              defaultValue="LAX"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="departure-date" className="text-sm font-medium text-gray-700">
              Departure Date
            </Label>
            <div className="relative mt-1">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="departure-date"
                type="date"
                className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                defaultValue="2025-03-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="return-date" className="text-sm font-medium text-gray-700">
              Return Date
            </Label>
            <div className="relative mt-1">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="return-date"
                type="date"
                className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                defaultValue="2025-03-17"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
