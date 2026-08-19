import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Udara | Strict savings on WhatsApp",
    short_name: "Udara",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#4a0508",
    theme_color: "#4a0508",
    icons: [
      {
        src: "/icon-192.png?v=3",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/udara-mark.png?v=3",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png?v=3",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
