import Link from "next/link"
import { Home, Library, Plus, Search, User } from "lucide-react"

export function BottomNavigation() {
  return (
    <div className="flex items-center justify-between w-full max-w-xs space-x-6">
      <Link href="/" className="flex flex-col items-center">
        <Home size={24} className="text-gray-500" />
      </Link>

      <Link href="#" className="flex flex-col items-center">
        <Library size={24} className="text-gray-500" />
      </Link>

      <Link href="#" className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
          <Plus size={20} className="text-gray-500" />
        </div>
      </Link>

      <Link href="#" className="flex flex-col items-center">
        <Search size={24} className="text-gray-500" />
      </Link>

      <Link href="#" className="flex flex-col items-center">
        <User size={24} className="text-gray-500" />
      </Link>
    </div>
  )
}
