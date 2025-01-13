import { CivicAuthProvider } from "@civic/auth/nextjs";
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <CivicAuthProvider>{children}</CivicAuthProvider>
            </body>
        </html>
    );
}