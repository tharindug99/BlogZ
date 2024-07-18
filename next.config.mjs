/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "check 1",
  },
  images: {
    domains: [
      "r2.erweima.ai",
      "via.placeholder.com",
      "www.loginradius.com",
      "images.squarespace-cdn.com",
      // "cdn.britannica.com",
    ],
  },
};

export default nextConfig;
