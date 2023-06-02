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
        hostname: "altava-b2b-clarins.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
