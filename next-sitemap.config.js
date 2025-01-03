/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fibbler.co",
  generateRobotsTxt: true,
  exclude: [
    "/app/insights",
    "/app/sources",
    "/article/hubspot-app",
    "/article/hubspot-integration",
    "/upgrade",
    "not-found",
  ],
};
