/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  appDir: true,
  
  images:{
    domains:['https://pixabay.com/','https://unsplash.com/', 'https://google.com', 'http://google.com','fakestoreapi.com', 'https://console.firebase.google.com/']
  }
}

module.exports = nextConfig
