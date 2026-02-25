"use client"

import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"
import RightSidebar from "@/components/layout/RightSidebar"
import Footer from "@/components/layout/Footer"

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">

      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

        <RightSidebar />
      </div>

      <Footer />

    </div>
  )
}