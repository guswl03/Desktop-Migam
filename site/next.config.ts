import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Desktop-Migam",
  assetPrefix: "/Desktop-Migam/",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
