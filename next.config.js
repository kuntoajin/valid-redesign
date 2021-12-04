const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    buildExcludes: [/middleware-manifest\.json$/]
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["cdn.visiteliti.com"],
    minimumCacheTTL: 600,
  },
});
