import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { siteConfig } from "@/lib/site";
import { youtubeAddressBar, youtubeEmbedSrc } from "@/lib/youtube";

/**
 * Same browser chrome + inner height as the old WhatsApp mock:
 * h-[640px] md:h-[720px] lg:h-[780px]
 */
export function HeroProduct() {
  const src = youtubeEmbedSrc(siteConfig.heroYoutubeUrl);

  return (
    <BrowserFrame url={youtubeAddressBar(siteConfig.heroYoutubeUrl)} live>
      <div className="relative h-[640px] bg-black md:h-[720px] lg:h-[780px]">
        {src ? (
          <iframe
            src={src}
            title="From plastic waste to free clean water"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-[15px] text-white/55">
            Add a YouTube link to play the film here.
          </div>
        )}
      </div>
    </BrowserFrame>
  );
}
