/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  trailingSlash: false,
  allowedDevOrigins: [
    '192.168.0.24',
  ],
};
export default nextConfig;
