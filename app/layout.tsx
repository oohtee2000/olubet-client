import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"
// import Navbar from "@/components/layout/Navbar";
// import Sidebar from "@/components/layout/Sidebar";
// import RightSidebar from "@/components/layout/RightSidebar";
// import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Betting App",
  description: "A betting app layout",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-900 text-white min-h-screen flex flex-col">

        <main className="flex-1">
          {children}
        </main>

        <Toaster position="top-right" />

      </body>
    </html>
  );
}