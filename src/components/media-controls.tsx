import { Play, SkipBack, RotateCcw } from "lucide-react"

export function MediaControls() {
  return (
    <div className="flex items-center justify-center gap-6">
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
        <SkipBack size={16} />
      </button>

      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
        <Play size={20} />
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
        <RotateCcw size={16} />
      </button>
    </div>
  )
}

