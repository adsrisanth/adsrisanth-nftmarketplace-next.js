import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(9,12,123,1) 80%)",
            padding: "1rem",
            display:"flex",
            justifyContent:"center"
            
          }}          
        >
          <p>Welcome to nFT</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "#000",
            padding:"1rem",
            display:"flex",
            justifyContent:"center"
          }}
        >
          <p>Developed and Designed by Dinesh SriSanth Adari</p>
        </footer>
      </body>
    </html>
  );
}
