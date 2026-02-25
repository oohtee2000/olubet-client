import { LucideIcon } from "lucide-react"

export interface Selection {
  label: string
}

export interface BoostMarket {
  id: string
  boostLabel: string
  boostPercent?: string
  popularity: string
  title: string
  selections: Selection[]
  odds: string
  stakeReturn: string
}

export interface League {
  id: string
  name: string
  icon: LucideIcon
  markets: BoostMarket[]
}