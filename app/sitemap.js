const siteUrl = "https://harry-bao.vercel.app";

export default function sitemap() {
  const routes = ["", "/about", "/work", "/materials", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
