import type { NextConfig } from "next";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  output: "export",
};

export default nextConfig;
