import Link from "next/link"
import { CategoryButtons } from "../components/category-buttons"

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 text-center">
      <h1 className="text-3xl font-bold tracking-tight mb-2">WELCOME</h1>
      <p className="text-sm text-gray-600 mb-8">The best time to meditate is now</p>

      <CategoryButtons activeCategory="meditation" />

      <Link href="/timer" className="w-full mt-12 bg-[#0a3a4a] text-white py-4 rounded-md font-medium">
        Click to start
      </Link>
    </div>
  )
} 