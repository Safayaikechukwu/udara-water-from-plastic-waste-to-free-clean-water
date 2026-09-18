/** Pull a YouTube video id from a watch, share, shorts, live, or embed URL. */
export function youtubeVideoId(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  if (/^[\w-]{11}$/.test(raw)) return raw;

  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (!host.endsWith("youtube.com") && !host.endsWith("youtube-nocookie.com")) {
      return null;
    }

    const fromQuery = url.searchParams.get("v");
    if (fromQuery && /^[\w-]{11}$/.test(fromQuery)) return fromQuery;

    const parts = url.pathname.split("/").filter(Boolean);
    const nested = parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live";
    const id = nested ? parts[1] : parts[0];
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

export function youtubeEmbedSrc(input: string): string | null {
  const id = youtubeVideoId(input);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
}

export function youtubeAddressBar(input: string): string {
  const id = youtubeVideoId(input);
  return id ? `www.youtube.com/watch?v=${id}` : "www.youtube.com";
}
