"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Hotel, Brain, Calendar } from "lucide-react"
import FlightsTab from "@/components/tabs/flights-tab"
import HotelsTab from "@/components/tabs/hotels-tab"
import RecommendationsTab from "@/components/tabs/recommendations-tab"
import ItineraryTab from "@/components/tabs/itinerary-tab"

interface NavigationTabsProps {
  activeTab: string
  setActiveTab: (value: string) => void
}

export default function NavigationTabs({ activeTab, setActiveTab }: NavigationTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-6 bg-white shadow-sm">
        <TabsTrigger value="flights" className="flex items-center gap-2">
          <Plane className="h-4 w-4" />
          Flights
        </TabsTrigger>
        <TabsTrigger value="hotels" className="flex items-center gap-2">
          <Hotel className="h-4 w-4" />
          Hotels
        </TabsTrigger>
        <TabsTrigger value="recommendations" className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          AI Recommendations
        </TabsTrigger>
        <TabsTrigger value="itinerary" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Itinerary
        </TabsTrigger>
      </TabsList>

      <TabsContent value="flights">
        <FlightsTab />
      </TabsContent>

      <TabsContent value="hotels">
        <HotelsTab />
      </TabsContent>

      <TabsContent value="recommendations">
        <RecommendationsTab />
      </TabsContent>

      <TabsContent value="itinerary">
        <ItineraryTab />
      </TabsContent>
    </Tabs>
  )
}
