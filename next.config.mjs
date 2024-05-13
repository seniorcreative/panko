/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["default", "en-US", "zh-CN", "fr", "es"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
};

export default nextConfig;
