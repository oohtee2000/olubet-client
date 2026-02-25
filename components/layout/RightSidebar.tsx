"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const COLORS = {
  primary: "#A3FF12",
  primaryText: "#0B1C2D",
  background: "#0B1C2D",
  secondaryBg: "#1F2937",
  heading: "#F5F7FA",
  muted: "rgba(245,247,250,0.6)",
  body: "rgba(245,247,250,0.85)",
}

/* UI Indicators */
const INDICATORS = {
  win: "#A3FF12",
  loss: "#EF4444",
  live: "#B6FF3A",
}

const buttonPrimaryStyle = {
  background: COLORS.primary,
  color: COLORS.primaryText,
}

const buttonSecondaryStyle = {
  background: "transparent",
  border: `1px solid ${COLORS.primary}`,
  color: COLORS.primary,
}

export default function RightSidebar() {
  return (
    <aside
      className="hidden lg:flex flex-col w-72 shrink-0 border-l h-[calc(100vh-112px)] overflow-hidden"
      style={{
        background: COLORS.background,
        borderColor: COLORS.secondaryBg,
        color: COLORS.heading,
      }}
    >
      {/* Live Match Preview */}
      <div
        className="p-2 border-b space-y-2"
        style={{
          background: COLORS.secondaryBg,
          borderColor: COLORS.primary,
        }}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between text-xs opacity-80">
          <span style={{ color: COLORS.muted }}>Show Match ID</span>
          <span style={{ color: COLORS.muted }}>▭</span>
        </div>

        {/* Match Header */}
        <div className="flex items-center justify-center gap-3 text-sm font-semibold">
          <span className="flex items-center gap-1 text-xs" style={{ color: INDICATORS.live }}>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            LIVE
          </span>

          <span style={{ color: COLORS.heading }}>81:03</span>
        </div>

        {/* Score Board */}
        <div className="flex items-center justify-center gap-6 text-lg font-bold tracking-wide">
          <span className="flex items-center gap-2" style={{ color: INDICATORS.win }}>
            SEL <span>4</span>
          </span>

          <div className="w-1 h-6 rounded" style={{ background: COLORS.primary }} />

          <span className="flex items-center gap-2" style={{ color: INDICATORS.loss }}>
            0 <span>WES</span>
          </span>
        </div>

        {/* Field Preview */}
        <div className="relative rounded-lg overflow-hidden border border-[#1F2937]">
          <div
            className="h-36 flex items-center justify-center text-sm font-semibold"
            style={{
              background: "linear-gradient(180deg,#1F2937,#0B1C2D)",
              color: COLORS.heading,
            }}
          >
            Dangerous Attack
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-4 text-xs font-medium pt-1">
          {["FIELD", "TEAM STATS", "PLAY"].map((tab, i) => (
            <span
              key={tab}
              className={`cursor-pointer px-2 py-1 rounded-full transition-all hover:brightness-110 ${
                i === 0 ? "border text-primary" : "opacity-70"
              }`}
              style={{
                borderColor: i === 0 ? COLORS.primary : "transparent",
                color: i === 0 ? COLORS.primary : COLORS.muted,
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Betslip Header */}
      <div
        className="px-4 py-3 border-b font-semibold text-sm"
        style={{
          background: COLORS.secondaryBg,
          color: COLORS.heading,
          borderColor: COLORS.primary,
        }}
      >
        Betslip
      </div>

      {/* Empty Betslip Message */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-10 gap-2">
        <p className="text-sm font-medium" style={{ color: COLORS.body }}>
          Your betslip is empty.
        </p>

        <p className="text-xs max-w-[200px]" style={{ color: COLORS.muted }}>
          Please make one or more selections in order to place a bet.
        </p>
      </div>

      {/* Book Section */}
      <div className="px-4 py-3 space-y-2">
        <div className="text-sm font-medium" style={{ color: COLORS.body }}>
          Book:
        </div>

        <div className="text-xs" style={{ color: COLORS.muted }}>
          Please insert a booking number below.
        </div>

        <div className="flex gap-2 items-center">
          <Input
            className="h-9 border-none text-sm flex-1"
            style={{
              background: COLORS.secondaryBg,
              color: COLORS.heading,
            }}
          />

          <Button
            size="sm"
            className="h-9 font-semibold transition-all hover:brightness-110"
            style={{
              ...buttonPrimaryStyle,
            }}
          >
            Book
          </Button>
        </div>
      </div>

      {/* Check Bet Section */}
      <div className="px-4 py-3 space-y-2">
        <div className="text-sm font-medium" style={{ color: COLORS.body }}>
          Check bet:
        </div>

        <div className="text-xs" style={{ color: COLORS.muted }}>
          Insert a valid Bet ID to check status.
        </div>

        <div className="flex gap-2 items-center">
          <Input
            className="h-9 border-none text-sm flex-1"
            style={{
              background: COLORS.secondaryBg,
              color: COLORS.heading,
            }}
          />

          <Button
            size="sm"
            className="h-9 font-semibold transition-all hover:brightness-110"
            style={{
              ...buttonSecondaryStyle,
            }}
          >
            Check
          </Button>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="mt-auto p-3">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/contact-banner.png"
            alt="Contact Us"
            width={280}
            height={140}
            className="w-full object-cover"
          />
        </div>
      </div>
    </aside>
  )
}