"use client"

import { Menu, Search, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const COLORS = {
  primary: "#A3FF12",
  primaryText: "#0B1C2D",
  background: "#0B1C2D",
  secondaryBg: "#1F2937",
  heading: "#F5F7FA",
  muted: "rgba(245,247,250,0.6)",
}

export default function TopNavbar() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <header
      className="flex items-center justify-between px-4 py-2 border-b transition-all"
      style={{
        background: COLORS.background,
        borderColor: COLORS.secondaryBg,
      }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="hover:brightness-110">
          <Menu className="h-5 w-5" style={{ color: COLORS.heading }} />
        </Button>

        <Link href="/">
          <h1
            className="text-2xl font-bold italic tracking-tight cursor-pointer"
            style={{ color: COLORS.primary }}
          >
            BetZone
          </h1>
        </Link>
      </div>

      {/* Desktop Auth Section */}
      <div className="hidden md:flex items-center gap-2">

        <Input
          placeholder="Mobile Number"
          className="w-40 h-9 border-none text-sm"
          style={{
            background: COLORS.secondaryBg,
            color: COLORS.heading,
          }}
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-40 h-9 border-none text-sm pr-8"
            style={{
              background: COLORS.secondaryBg,
              color: COLORS.heading,
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2"
            style={{ color: COLORS.muted }}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* Secondary Outline Button */}
        <Button
          size="sm"
          className="font-semibold transition-all hover:brightness-110"
          style={{
            background: "transparent",
            border: `1px solid ${COLORS.primary}`,
            color: COLORS.primary,
          }}
        >
          Login
        </Button>

        {/* Primary CTA Button */}
        <Button
          size="sm"
          className="font-semibold transition-all hover:brightness-110"
          style={{
            background: COLORS.primary,
            color: COLORS.primaryText,
          }}
        >
          Sign Up
        </Button>
      </div>

      {/* Mobile Right Section */}
      <div className="flex items-center gap-2 md:hidden">
        <Search className="h-5 w-5" style={{ color: COLORS.heading }} />
      </div>
    </header>
  )
}