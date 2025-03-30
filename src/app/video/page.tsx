"use client"

import { useState } from "react"
import { CategoryButtons } from "@/components/category-buttons"
import { SessionSelector } from "@/components/session-selector"
import { MediaControls } from "@/components/media-controls"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Play } from "lucide-react"

export default function VideoPage() {
  const [currentSession, setCurrentSession] = useState<number>(1)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSessionChange = (session: number) => {
    setCurrentSession(session)
    setIsLoading(true)
    setIsPlaying(false)
    // Simulate loading video
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex flex-col min-h-screen w-full max-w-md mx-auto bg-white">
      <div className="flex flex-col items-center justify-between w-full px-6 py-8 h-full">
        <div className="w-full">
          <CategoryButtons activeCategory="meditation" />

          <div className="mt-6">
            <SessionSelector 
              currentSession={currentSession} 
              onSessionChange={handleSessionChange} 
              totalSessions={3} 
            />
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full" />
                    <div className="mt-2 w-24 h-4 bg-gray-800 rounded" />
                  </div>
                </div>
              ) : (
                <button 
                  onClick={handlePlayPause}
                  className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Play className={`w-6 h-6 text-black ${isPlaying ? 'hidden' : 'ml-1'}`} />
                  {isPlaying && (
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-1 h-6 bg-black mx-0.5" />
                      <div className="w-1 h-6 bg-black mx-0.5" />
                    </div>
                  )}
                </button>
              )}
              {/* Video player would be implemented here */}
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="font-medium">Video Title</h3>
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
    </div>
  )
}

