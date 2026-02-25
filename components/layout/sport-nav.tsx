"use client"

import {
  Home,
  Trophy,
  Radio,
  Dice1,
  Plane,
  Tv,
  Gamepad2,
  Monitor,
  Gift,
  Ticket,
} from "lucide-react"

import { useState } from "react"
import { cn } from "@/lib/utils"

const COLORS = {
  primary: "#A3FF12",
  primaryText: "#0B1C2D",
  background: "#1F2937",
  activeBg: "#A3FF12",
  heading: "#F5F7FA",
  muted: "rgba(245,247,250,0.6)",
  danger: "#EF4444",
}

type SportItem = {
  icon: React.ElementType
  label: string
}

const sports: SportItem[] = [
  { icon: Home, label: "Home" },
  { icon: Trophy, label: "Sport" },
  { icon: Radio, label: "Live" },
  { icon: Dice1, label: "Casino" },
  { icon: Plane, label: "Aviator" },
  { icon: Tv, label: "Live Casino" },
  { icon: Ticket, label: "Lucky Numbers" },
  { icon: Gamepad2, label: "Betgames" },
  { icon: Monitor, label: "Esports" },
  { icon: Gift, label: "Promotions" },
]

export default function SportNav() {
  const [active, setActive] = useState("Sport")

  return (
    <nav
      className="flex items-center border-b overflow-x-auto transition-all"
      style={{
        background: COLORS.background,
        borderColor: "#1F2937",
      }}
    >
      {sports.map((sport) => {
        const Icon = sport.icon
        const isActive = active === sport.label

        return (
          <button
            key={sport.label}
            onClick={() => setActive(sport.label)}
            className={cn(
              "flex flex-col items-center gap-1 px-4 py-2 min-w-[72px] text-xs font-medium transition-all hover:brightness-110",
              isActive ? "text-[0B1C2D]" : ""
            )}
            style={{
              background: isActive ? COLORS.activeBg : "transparent",
              color: isActive ? COLORS.primaryText : COLORS.heading,
            }}
          >
            <Icon className="h-5 w-5" />
            <span className="whitespace-nowrap">{sport.label}</span>
          </button>
        )
      })}

      {/* Betslip */}
      <div className="ml-auto px-4 py-2 flex items-center">
        <span
          className="text-sm font-semibold border rounded-full px-3 py-1 transition-all hover:brightness-110"
          style={{
            color: COLORS.heading,
            borderColor: COLORS.primary,
          }}
        >
          Betslip{" "}
          <span
            className="rounded-full px-1.5 py-0.5 text-xs ml-1"
            style={{
              background: COLORS.primary,
              color: COLORS.primaryText,
            }}
          >
            0
          </span>
        </span>
      </div>
    </nav>
  )
}