import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET() {
  return rss({
    title: "Astro Learner",
    description: "An astro journey",
    site: "https://astro-blog-one-ebon.vercel.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
