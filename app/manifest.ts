import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Udara",
    short_name: "Udara",
    description: siteConfig.description,
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#e4f222",
    theme_color: "#e4f222",
    categories: ["finance", "lifestyle"],
    lang: "en",
    icons: [
      {
        src: "/icon-192.png?v=7",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png?v=7",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-192.png?v=7",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512.png?v=7",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png?v=7",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/udara-mark.png?v=7",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
