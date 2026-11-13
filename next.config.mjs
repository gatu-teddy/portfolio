/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to ./out
  output: "export",
  // Set NEXT_PUBLIC_BASE_PATH=/portfolio when hosting under a sub-path (GitHub Pages).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
