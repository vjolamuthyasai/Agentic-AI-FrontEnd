import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Clock, Wifi, Coffee } from "lucide-react"

const flightResults = [
  {
    airline: "Spirit",
    type: "Nonstop Flight",
    departure: "Hartsfield-Jackson Atlanta International Airport (ATL)",
    arrival: "Los Angeles International Airport (LAX)",
    departureTime: "19:06",
    arrivalTime: "21:18",
    duration: "5h 12m",
    price: 360,
    class: "Economy",
  },
  {
    airline: "Frontier",
    type: "Nonstop Flight",
    departure: "Hartsfield-Jackson Atlanta International Airport (ATL)",
    arrival: "Los Angeles International Airport (LAX)",
    departureTime: "18:20",
    arrivalTime: "20:30",
    duration: "5h 10m",
    price: 361,
    class: "Economy",
  },
]

export default function FlightsTab() {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plane className="h-5 w-5 text-blue-600" />
          Available Flights from ATL to LAX
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {flightResults.map((flight, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Plane className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{flight.airline}</h3>
                      <p className="text-sm text-gray-600">{flight.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">${flight.price}</div>
                    <Badge variant="secondary" className="mt-1">
                      {flight.class}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">Departure:</span>
                    </div>
                    <p className="text-sm text-gray-800">{flight.departure}</p>
                    <p className="text-sm text-gray-600">at {flight.departureTime}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">Arrival:</span>
                    </div>
                    <p className="text-sm text-gray-800">{flight.arrival}</p>
                    <p className="text-sm text-gray-600">at {flight.arrivalTime}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      Duration: {flight.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Wifi className="h-4 w-4 text-green-500" />
                      <Coffee className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Select Flight</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
