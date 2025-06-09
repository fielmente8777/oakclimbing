import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // swcMinify: true,
  images: {
    unoptimized: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "eazotel-clients-images.s3.ap-south-1.amazonaws.com",
  //     },
  //   ],
  // },
  trailingSlash: true
};

export default nextConfig;
