/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    distDir:"build",
    output:"export",
    trailingSlash: true,
    images:{
        unoptimized:true
    }
};


module.exports = nextConfig;