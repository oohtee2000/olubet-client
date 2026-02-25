"use client"

import {
  Search,
  SlidersHorizontal,
  Zap,
  Star,
  ChevronDown,
  Clock,
  ArrowUpDown,
  Trophy,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { leaguesData } from "@/data/leagues"

/* Theme Colors */
const COLORS = {
  primaryBg: "#0B1C2D",
  secondaryBg: "#1F2937",
  accent: "#A3FF12",
  textLight: "#F5F7FA",
  danger: "#EF4444",
}

export default function OddsTable() {
  const [selectedOdds, setSelectedOdds] = useState<Set<string>>(new Set())

  const toggleOdd = (key: string) => {
    setSelectedOdds((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <div className="flex-1 min-w-0 text-[var(--text-light)]" style={{
      "--text-light": COLORS.textLight,
      backgroundColor: COLORS.primaryBg,
      color: COLORS.textLight
    } as React.CSSProperties}>

      {/* Search + Filters */}
      <div className="flex items-center gap-2 mb-3">
        <div
          className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md cursor-pointer"
          style={{ backgroundColor: COLORS.secondaryBg }}
        >
          <span>A-Z Sports</span>
          <ChevronDown className="h-4 w-4 opacity-80" />
        </div>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
          <Input
            placeholder="Search teams or leagues"
            className="pl-9 border-none"
            style={{
              backgroundColor: COLORS.secondaryBg,
              color: COLORS.textLight,
            }}
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">

        <Button
          variant="outline"
          size="sm"
          className="gap-1 transition-all hover:brightness-110"
          style={{
            borderColor: COLORS.accent,
            color: COLORS.accent,
            background: "transparent",
          }}
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Leagues
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="gap-1 transition-all hover:brightness-110"
          style={{
            borderColor: COLORS.accent,
            color: COLORS.accent,
            background: "transparent",
          }}
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filters
        </Button>

        <Button variant="ghost" size="sm" className="hover:brightness-110">
          <Zap className="h-3.5 w-3.5" style={{ color: COLORS.accent }} />
        </Button>

        <Button variant="ghost" size="sm" className="hover:brightness-110">
          <Star className="h-3.5 w-3.5" style={{ color: COLORS.accent }} />
        </Button>

        <div className="ml-auto flex items-center gap-2 flex-wrap">

          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-md"
            style={{
              background: COLORS.secondaryBg,
              color: COLORS.textLight,
              border: `1px solid ${COLORS.accent}`,
            }}
          >
            1X2
          </span>

          {["Double Chance", "Total Goals"].map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1.5 rounded-md cursor-pointer transition-all hover:brightness-110"
              style={{
                background: COLORS.secondaryBg,
                border: `1px solid ${COLORS.accent}`,
                color: COLORS.textLight,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Odds Header */}
      <div className="grid grid-cols-[1fr_repeat(9,48px)] gap-1 mb-1 px-2 text-xs font-semibold opacity-80">
        <div />
        {["1", "X", "2", "1 or X", "1 or 2", "X or 2", "", "Over", "Under"].map(
          (h, i) => (
            <span key={i} className="text-center">
              {h}
            </span>
          )
        )}
      </div>

      {/* Leagues */}
      {leaguesData.map((league) => (
        <div key={league.name} className="mb-3">

          {/* League Header */}
          <div
            className="flex items-center justify-between px-4 py-2 rounded-md mb-1 shadow-sm transition-all hover:brightness-105"
            style={{
              background: COLORS.secondaryBg,
              border: `1px solid ${COLORS.accent}`,
            }}
          >
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" style={{ color: COLORS.accent }} />
              <span className="text-sm font-semibold">
                {league.name}
              </span>
              <ArrowUpDown className="h-3.5 w-3.5 opacity-60" />
            </div>

            <ChevronDown className="h-4 w-4 opacity-70" />
          </div>

          {/* Matches */}
          {league.matches.map((match, mi) => {
            const baseKey = `${league.name}-${mi}`
            const oddKeys = ["1", "X", "2", "1orX", "1or2", "Xor2"] as const

            return (
              <div
                key={mi}
                className="grid grid-cols-[1fr_repeat(9,48px)] gap-1 items-center px-2 py-2 border-b transition-all hover:brightness-105"
                style={{
                  background: COLORS.primaryBg,
                  borderBottom: `1px solid ${COLORS.secondaryBg}`,
                }}
              >
                {/* Match Info */}
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate"
                       style={{ color: COLORS.textLight }}>
                    {match.home}
                  </div>

                  <div
                    className="text-sm truncate"
                    style={{ color: "rgba(245,247,250,0.85)" }}
                  >
                    {match.away}
                  </div>

                  <div className="flex items-center gap-1 mt-0.5 opacity-70">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">{match.time}</span>
                  </div>
                </div>

                {/* Odds Buttons */}
                {oddKeys.map((oddKey) => {
                  const oddId = `${baseKey}-${oddKey}`
                  const isSelected = selectedOdds.has(oddId)

                  return (
                    <button
                      key={oddKey}
                      onClick={() => toggleOdd(oddId)}
                      className="text-xs font-semibold rounded-md py-1.5 transition-all duration-150 hover:brightness-110"
                      style={{
                        background: isSelected
                          ? COLORS.accent
                          : COLORS.secondaryBg,
                        color: isSelected ? COLORS.primaryBg : COLORS.textLight,
                      }}
                    >
                      {match.odds[oddKey].toFixed(2)}
                    </button>
                  )
                })}

                {/* Total */}
                <div className="text-center text-xs font-semibold opacity-80">
                  {match.odds.total}
                </div>

                {/* Over */}
                {["over", "under"].map((type) => {
                  const id = `${baseKey}-${type}`
                  const isSelected = selectedOdds.has(id)

                  return (
                    <button
                      key={type}
                      onClick={() => toggleOdd(id)}
                      className="text-xs font-semibold rounded-md py-1 transition-all hover:brightness-110"
                      style={{
                        background: isSelected
                          ? COLORS.accent
                          : COLORS.secondaryBg,
                        color: isSelected ? COLORS.primaryBg : COLORS.textLight,
                      }}
                    >
                      {match.odds[type as "over" | "under"].toFixed(2)}
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}