import { createCivicAuthPlugin } from "@civic/auth/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
};

const withCivicAuth = createCivicAuthPlugin({
    clientId: 'YOUR_CLIENT_ID', // Replace with your actual Civic Auth client ID
});

export default withCivicAuth(nextConfig);
