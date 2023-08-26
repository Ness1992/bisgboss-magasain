/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "tailwindui.com",
        "res.cloudinary.com"
      ]
      
    },
    typescript:{
      ignoreBuildErrors: true,
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
   
  }
  
  module.exports = nextConfig