/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Explicitly disable ESLint during the build
    ignoreDuringBuilds: true,
  },
  
  // Include any other settings that were in your previous config
  reactStrictMode: true,
}

export default nextConfig 