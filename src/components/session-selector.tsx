"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

type SessionSelectorProps = {
  currentSession: number
  totalSessions: number
  onSessionChange: (session: number) => void
}

export function SessionSelector({ currentSession, totalSessions, onSessionChange }: SessionSelectorProps) {
  const router = useRouter()

  const handlePrevious = () => {
    if (currentSession > 1) {
      onSessionChange(currentSession - 1)
    }
  }

  const handleNext = () => {
    if (currentSession < totalSessions) {
      onSessionChange(currentSession + 1)
    }
  }

  const handleSessionClick = (session: number) => {
    onSessionChange(session)
    // Add routing based on session number
    switch (session) {
      case 1:
        router.push('/timer')
        break
      case 2:
        router.push('/video')
        break
      case 3:
        router.push('/pdf')
        break
      default:
        break
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-between px-4 py-2 bg-[#e3f2fd] rounded-full w-full max-w-xs">
        <button onClick={handlePrevious} className="text-gray-700">
          <ChevronLeft size={20} />
        </button>

        {Array.from({ length: totalSessions }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleSessionClick(index + 1)}
            className={`px-2 text-sm font-medium ${currentSession === index + 1 ? "text-black" : "text-gray-500"}`}
          >
            S{index + 1}
          </button>
        ))}

        <button onClick={handleNext} className="text-gray-700">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

