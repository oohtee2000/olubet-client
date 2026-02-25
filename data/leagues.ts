export interface MatchOdds {
  "1": number
  X: number
  "2": number
  "1orX": number
  "1or2": number
  "Xor2": number
  total: number
  over: number
  under: number
}

export interface Match {
  home: string
  away: string
  time: string
  league: string
  odds: MatchOdds
  flash?: string
}

export interface League {
  name: string
  matches: Match[]
}

export const leaguesData: League[] = [
  {
    name: "UEFA Champions League, International Clubs",
    matches: [
      {
        home: "Atletico Madrid", away: "Club Brugge", time: "Today 18:45",
        league: "UEFA Champions League, Inter...",
        odds: { "1": 1.40, X: 5.00, "2": 6.40, "1orX": 1.13, "1or2": 1.17, "Xor2": 2.75, total: 3.5, over: 2.00, under: 1.79 },
        flash: "1"
      },
      {
        home: "Bayer Leverkusen", away: "Olympiacos Piraeus", time: "Today 21:00",
        league: "UEFA Champions League, Inter...",
        odds: { "1": 1.76, X: 3.90, "2": 4.10, "1orX": 1.25, "1or2": 1.26, "Xor2": 1.99, total: 2.5, over: 1.58, under: 2.33 },
        flash: "1"
      },
      {
        home: "Newcastle United", away: "Qarabag FK", time: "Today 21:00",
        league: "UEFA Champions League, Inter...",
        odds: { "1": 1.14, X: 8.20, "2": 13.00, "1orX": 1.04, "1or2": 1.07, "Xor2": 4.70, total: 3.5, over: 1.62, under: 2.25 },
      },
      {
        home: "Inter Milano", away: "Bodoe/Glimt", time: "Today 21:00",
        league: "UEFA Champions League, Inter...",
        odds: { "1": 1.24, X: 6.80, "2": 8.80, "1orX": 1.08, "1or2": 1.11, "Xor2": 3.65, total: 3.5, over: 1.73, under: 2.08 },
        flash: "2"
      },
    ],
  },
  {
    name: "Championship, England",
    matches: [
      {
        home: "Hull City", away: "Derby County", time: "Today 20:45",
        league: "Championship, England",
        odds: { "1": 2.37, X: 3.20, "2": 2.90, "1orX": 1.37, "1or2": 1.32, "Xor2": 1.51, total: 2.5, over: 1.94, under: 1.77 },
        flash: "2"
      },
      {
        home: "Middlesbrough FC", away: "Leicester City", time: "Today 20:45",
        league: "Championship, England",
        odds: { "1": 1.51, X: 4.30, "2": 5.40, "1orX": 1.15, "1or2": 1.20, "Xor2": 2.26, total: 2.5, over: 1.60, under: 2.20 },
      },
      {
        home: "Swansea City", away: "Preston North End", time: "Today 20:45",
        league: "Championship, England",
        odds: { "1": 1.76, X: 3.55, "2": 4.30, "1orX": 1.20, "1or2": 1.26, "Xor2": 1.90, total: 2.5, over: 1.98, under: 1.74 },
      },
    ],
  },
];