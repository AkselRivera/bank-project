/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sandbox.belvo.io',
      },
    ],
  },
}

export default nextConfig
