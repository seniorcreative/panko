/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  trailingSlash: false,
};

export default nextConfig;
