const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const FALLBACK_SWAN =
  "https://images.unsplash.com/photo-1564349686976-aeb0c1200ab6?w=800&q=80";

export async function getSwanImageUrl(): Promise<string> {
  if (!UNSPLASH_ACCESS_KEY) return FALLBACK_SWAN;
  try {
    const res = await fetch(
      "https://api.unsplash.com/search/photos?query=white+swan+elegant&per_page=5&orientation=landscape",
      {
        headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        next: { revalidate: 86400 },
      }
    );
    const data = (await res.json()) as { results?: { urls?: { regular?: string } }[] };
    const url = data.results?.[0]?.urls?.regular;
    return url ? `${url}?w=800&q=80` : FALLBACK_SWAN;
  } catch {
    return FALLBACK_SWAN;
  }
}
