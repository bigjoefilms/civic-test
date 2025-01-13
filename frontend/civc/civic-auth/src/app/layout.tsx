
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Wrap your app with CivicAuthProvider */}
      
          {children}
        
      </body>
    </html>
  );
}
