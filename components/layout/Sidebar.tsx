"use client"

import { ChevronDown, Trophy } from "lucide-react"

type Winner = {
  amount: string
  id: string
  type: string
}

const COLORS = {
  primary: "#A3FF12",
  primaryText: "#0B1C2D",
  background: "#0B1C2D",
  secondaryBg: "#1F2937",
  heading: "#F5F7FA",
  muted: "rgba(245,247,250,0.6)",
  body: "rgba(245,247,250,0.85)",
  danger: "#EF4444",
}

const winners: Winner[] = [
  { amount: "232,112.50", id: "****294", type: "Single Bet" },
  { amount: "226,540.80", id: "****211", type: "Multibet (4)" },
  { amount: "129,629.51", id: "****262", type: "Multibet (5)" },
  { amount: "70,751.47", id: "****129", type: "Multibet (9)" },
  { amount: "55,000.00", id: "****203", type: "Single Bet" },
  { amount: "44,225.00", id: "****958", type: "Multibet (3)" },
  { amount: "41,511.22", id: "****495", type: "Multibet (7)" },
  { amount: "35,964.01", id: "****724", type: "Multibet (26)" },
  { amount: "33,750.00", id: "****674", type: "Single Bet" },
  { amount: "31,938.79", id: "****011", type: "Multibet (10)" },
  { amount: "29,248.82", id: "****839", type: "Multibet (3)" },
  { amount: "27,574.34", id: "****688", type: "Multibet (3)" },
]

export default function Sidebar() {
  return (
    <aside
      className="w-full lg:w-72 shrink-0 border-r h-[calc(100vh-112px)] overflow-hidden transition-all"
      style={{
        background: COLORS.background,
        borderColor: COLORS.secondaryBg,
        color: COLORS.heading,
      }}
    >

      {/* Header */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          background: COLORS.secondaryBg,
          borderColor: COLORS.primary,
        }}
      >
        <Trophy style={{ color: COLORS.primary }} className="h-4 w-4" />

        <h2
          className="text-sm font-bold"
          style={{ color: COLORS.heading }}
        >
          Recent Big Winners
        </h2>
      </div>

      {/* Winners List */}
      <div className="divide-y overflow-y-auto h-full"
           style={{ borderColor: COLORS.secondaryBg }}>

        {winners.map((winner, index) => {
          const isMultibet = winner.type.includes("Multibet")

          return (
            <div
              key={index}
              className="flex items-center justify-between px-3 py-3 cursor-pointer transition-all hover:brightness-110"
              style={{
                background: "transparent",
              }}
            >
              <div className="flex flex-col min-w-0">

                <span
                  className="text-sm font-bold truncate"
                  style={{ color: COLORS.primary }}
                >
                  ₦ {winner.amount}
                </span>

                <span
                  className="text-xs truncate"
                  style={{ color: COLORS.muted }}
                >
                  {winner.id} •{" "}
                  <span
                    style={{
                      color: isMultibet
                        ? COLORS.primary
                        : COLORS.heading,
                      fontWeight: 500,
                    }}
                  >
                    {winner.type}
                  </span>
                </span>

              </div>

              <ChevronDown
                className="h-4 w-4"
                style={{ color: COLORS.muted }}
              />
            </div>
          )
        })}
      </div>
    </aside>
  )
}