import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ShoppingcartcontextProvider, {
  Shoppingcartcontext,
} from "./context/page";
import Link from "next/link";
import { useContext } from "react";
import Navbar from "./Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Bakery",
  description: "Delicious baked goods just for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <ShoppingcartcontextProvider>
          <header
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              padding: "1rem",
            }}
          >
            <Navbar />
          </header>

          <main className="container mx-auto px-4 py-6">{children}</main>

          <footer
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--background)",
              textAlign: "center",
              padding: "1rem",
              marginTop: "2rem",
            }}
          >
            <p className="text-sm">© 2025 My Bakery. All rights reserved.</p>
          </footer>
        </ShoppingcartcontextProvider>
      </body>
    </html>
  );
}
