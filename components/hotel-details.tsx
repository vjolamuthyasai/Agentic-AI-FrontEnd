import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Hotel, MapPin, Calendar } from "lucide-react"

interface HotelDetailsProps {
  useFlightDestination: boolean
  setUseFlightDestination: (value: boolean) => void
}

export default function HotelDetails({ useFlightDestination, setUseFlightDestination }: HotelDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Hotel className="h-5 w-5 text-orange-600" />
        <h2 className="text-xl font-semibold text-gray-900">Hotel Details</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Use flight destination for hotel</span>
          </div>
          <Switch checked={useFlightDestination} onCheckedChange={setUseFlightDestination} />
        </div>

        {useFlightDestination && (
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">Using flight destination (LAX) for hotel search</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="checkin" className="text-sm font-medium text-gray-700">
              Check-in Date
            </Label>
            <div className="relative mt-1">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="checkin"
                type="date"
                className="pl-10 h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                defaultValue="2025-03-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="checkout" className="text-sm font-medium text-gray-700">
              Check-out Date
            </Label>
            <div className="relative mt-1">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="checkout"
                type="date"
                className="pl-10 h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                defaultValue="2025-03-17"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
