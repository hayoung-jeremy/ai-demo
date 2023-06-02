/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.stablediffusionapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.dongascience.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
