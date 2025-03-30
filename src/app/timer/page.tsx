"use client"

import { useState } from "react"
import { CategoryButtons } from "../../components/category-buttons"
import { SessionSelector } from "../../components/session-selector"
import { Timer } from "../../components/timer"
import { MediaControls } from "../../components/media-controls"
import { BottomNavigation } from "../../components/bottom-navigation"

export default function TimerPage() {
  const [currentSession, setCurrentSession] = useState(1)

  return (
    <div className="flex flex-col items-center justify-between w-full px-6 py-8 h-full">
      <div className="w-full">
        <CategoryButtons activeCategory="meditation" />

        <div className="mt-6">
          <SessionSelector currentSession={currentSession} onSessionChange={setCurrentSession} totalSessions={3} />
        </div>

        <div className="mt-8 flex justify-center">
          <Timer duration={45} />
        </div>

        <div className="mt-6 text-center">
          <h3 className="font-medium">Audio Title</h3>
          <p className="text-sm text-gray-500">Artist Name</p>
        </div>

        <div className="mt-4">
          <MediaControls />
        </div>
      </div>

      <div className="mt-auto pt-8">
        <BottomNavigation />
      </div>
    </div>
  )
} 