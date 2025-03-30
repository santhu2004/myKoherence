"use client"

import { useState } from "react"
import { CategoryButtons } from "@/components/category-buttons"
import { SessionSelector } from "@/components/session-selector"
import { MediaControls } from "@/components/media-controls"
import { BottomNavigation } from "@/components/bottom-navigation"
import { FileText } from "lucide-react"

export default function PdfPage() {
  const [currentSession, setCurrentSession] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSessionChange = (session: number) => {
    setCurrentSession(session)
    setIsLoading(true)
    // Simulate loading PDF
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="flex flex-col min-h-screen w-full max-w-md mx-auto bg-white">
      <div className="flex flex-col items-center justify-between w-full px-6 py-8 h-full">
        <div className="w-full">
          <CategoryButtons activeCategory="pdf" />

          <div className="mt-6">
            <SessionSelector 
              currentSession={currentSession} 
              onSessionChange={handleSessionChange} 
              totalSessions={3} 
            />
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
              {isLoading ? (
                <div className="animate-pulse flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div className="mt-2 w-24 h-4 bg-gray-200 rounded" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <FileText className="w-12 h-12 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">PDF File</span>
                </div>
              )}
              {/* PDF viewer would be implemented here */}
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="font-medium">PDF Title</h3>
            <p className="text-sm text-gray-500">Full Title</p>
          </div>

          <div className="mt-4">
            <MediaControls />
          </div>
        </div>

        <div className="mt-auto pt-8">
          <BottomNavigation />
        </div>
      </div>
    </div>
  )
}

