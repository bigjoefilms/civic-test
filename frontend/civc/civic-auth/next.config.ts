import { createCivicAuthPlugin } from "@civic/auth/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
};

const withCivicAuth = createCivicAuthPlugin({
    clientId: '46096759-7de1-4d1a-98a2-59acd6113c1d', // Replace with your actual Civic Auth client ID
});

export default withCivicAuth(nextConfig);
