import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meditation App",
    short_name: "Meditate",
    description: "A meditation app to help you relax and focus",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a3a4a"
  }
}

