"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

type TimerProps = {
  duration: number
}

export function Timer({ duration }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60)
  const [isRunning, setIsRunning] = useState(false)

  // Calculate progress percentage
  const progress = 1 - timeLeft / (duration * 60)
  const circumference = 2 * Math.PI * 70
  const strokeDashoffset = circumference * (1 - progress)

  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${minutes}.${seconds.toString().padStart(2, "0")}`

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  return (
    <div className="relative flex items-center justify-center">
      <svg width="180" height="180" viewBox="0 0 180 180">
        {/* Background circle */}
        <circle cx="90" cy="90" r="70" fill="none" stroke="#e6e6e6" strokeWidth="4" />

        {/* Progress circle */}
        <circle
          cx="90"
          cy="90"
          r="70"
          fill="none"
          stroke="#2196f3"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 90 90)"
        />

        {/* Current position marker */}
        <circle cx="90" cy="20" r="6" fill="black" />
      </svg>

      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-bold">{formattedTime}</span>
        <ArrowDown className="mt-2 text-gray-600" size={20} />
      </div>
    </div>
  )
}

