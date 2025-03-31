import Link from "next/link"

type CategoryButtonsProps = {
  activeCategory: "breath" | "meditation" | "wisdom" | "journal" | "pdf" | "video"
}

export function CategoryButtons({ activeCategory }: CategoryButtonsProps) {
  const categories = [
    { id: "breath", label: "Breath" },
    { id: "meditation", label: "Meditation" },
    { id: "wisdom", label: "Wisdom" },
    { id: "journal", label: "Journal" },
  ]

  return (
    <div className="flex items-center justify-center gap-3 w-full">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.id}`}
          className={`flex items-center justify-center w-14 h-14 rounded-full text-white text-xs font-medium ${
            category.id === activeCategory ? "bg-[#0a3a4a]" : "bg-[#2196f3]"
          }`}
        >
          {category.label}
        </Link>
      ))}
    </div>
  )
}

