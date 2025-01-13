import { authMiddleware } from '@civic/auth/nextjs/middleware';

export default authMiddleware();

export const config = {
    matcher: ['/api/:path*', '/protected/:path*'], // Secure these paths
};