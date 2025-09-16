import { allProducts, markets } from "@/libs/data";
import { client } from "@/sanity/lib/client";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function GET() {
  // Static routes
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/our-company/our-history", changefreq: "monthly", priority: 0.8 },
    {
      url: "/our-company/our-associations&certifications",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "/our-company/our-international-ties",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "/our-company/leadership&team",
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: "/our-company/our-manufacturing-setup",
      changefreq: "monthly",
      priority: 0.9,
    },
    { url: "/blog", changefreq: "weekly", priority: 0.9 },
    { url: "/products", changefreq: "weekly", priority: 0.9 },
    { url: "/markets", changefreq: "weekly", priority: 0.9 },
  ];

  try {
    // Fetch dynamic routes from Sanity CMS with error handling
    const posts = await client.fetch(
      `*[_type == "post"]{ "url": slug.current }`
    );
    const market = await client.fetch(
      `*[_type == "markets"]{ "url": slug.current }`
    );
    posts.forEach((post) => {
      links.push({
        url: `/blog/${post.url}`,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });
    market.forEach((m) => {
      links.push({
        url: `/markets/${m.url}`,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });

    // Dynamic Product Pages - Added error handling and URL encoding
    const addProductLinks = (products, basePath) => {
      if (!Array.isArray(products)) return;
      products.forEach((product) => {
        if (product.productName) {
          const encodedName = encodeURIComponent(
            product.productName.replace(/\s+/g, "-")
          ).trim();
          links.push({
            url: `${basePath}/${encodedName}`,
            changefreq: "weekly",
            priority: 0.9,
            lastmod: new Date().toISOString(),
          });
        }
      });
    };

    // Add product links with proper base paths
    addProductLinks(allProducts, "/products");
    // addProductLinks(markets, "/markets");

    const hostname = "https://www.ashokminerals.com";
    if (!hostname) {
      throw new Error("Hostname is required");
    }

    // Generate sitemap with proper error handling
    const stream = new SitemapStream({
      hostname: hostname,
      xmlns: {
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    // Return with proper headers and cache control
    return new Response(xmlString, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control":
          "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      {
        status: 500,
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "no-cache",
        },
      }
    );
  }
}
