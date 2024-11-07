/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "randomuser.me" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
