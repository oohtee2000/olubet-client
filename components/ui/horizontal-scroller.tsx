"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  children: React.ReactNode
  scrollAmount?: number
}

export function HorizontalScroller({
  children,
  scrollAmount = 400,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return

    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative group">

      {/* Left Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-zinc-800 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </Button>

      {/* Right Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-zinc-800 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </Button>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap scroll-smooth"
      >
        <div className="flex gap-8 min-w-max px-6">
          {children}
        </div>
      </div>
    </div>
  )
}