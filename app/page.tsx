"use client"

import { useState } from "react"
import Header from "@/components/header"
import PlanningInterface from "@/components/planning-interface"
import NavigationTabs from "@/components/navigation-tabs"

export default function TravelPlanner() {
  const [useFlightDestination, setUseFlightDestination] = useState(true)
  const [activeTab, setActiveTab] = useState("flights")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <PlanningInterface
          useFlightDestination={useFlightDestination}
          setUseFlightDestination={setUseFlightDestination}
        />
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}
