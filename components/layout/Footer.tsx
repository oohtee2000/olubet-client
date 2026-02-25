"use client"

const COLORS = {
  primary: "#A3FF12",
  primaryText: "#0B1C2D",
  secondaryBg: "#1F2937",
  heading: "#F5F7FA",
  muted: "rgba(245,247,250,0.6)",
  body: "rgba(245,247,250,0.85)",
  loss: "#EF4444",
}

const Footer = () => {
  const links = {
    "Sports Betting": ["Football", "Basketball", "Tennis", "Cricket", "Ice Hockey"],
    Casino: ["Slots", "Live Casino", "Table Games", "Jackpots"],
    Support: ["Help Center", "Contact Us", "FAQs", "Responsible Gaming"],
    About: ["About Us", "Terms & Conditions", "Privacy Policy", "Affiliates"],
  }

  return (
    <footer
      className="border-t mt-auto transition-all duration-200"
      style={{
        background: "#0B1C2D",
        borderColor: COLORS.secondaryBg,
        color: COLORS.heading,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-8">

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4
                className="text-sm font-bold mb-3"
                style={{ color: COLORS.heading }}
              >
                {title}
              </h4>

              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs transition-colors hover:brightness-110"
                      style={{
                        color: COLORS.muted,
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Betting Status Indicators */}
        <div className="flex flex-col md:flex-row justify-between gap-4 border-t pt-6"
          style={{ borderColor: COLORS.secondaryBg }}
        >
          <div className="flex gap-6 text-xs">

            <div className="flex items-center gap-1">
              <span style={{ color: COLORS.primary }}>●</span>
              <span style={{ color: COLORS.body }}>Win / Positive Odds</span>
            </div>

            <div className="flex items-center gap-1">
              <span style={{ color: COLORS.loss }}>●</span>
              <span style={{ color: COLORS.body }}>Loss / Negative Odds</span>
            </div>

            <div className="flex items-center gap-1">
              <span style={{ color: "#B6FF3A" }}>●</span>
              <span style={{ color: COLORS.body }}>Live Match</span>
            </div>

          </div>

          {/* Primary CTA Button */}
          <button
            className="px-5 h-9 rounded-lg font-semibold transition-all hover:brightness-110 text-sm"
            style={{
              background: COLORS.primary,
              color: COLORS.primaryText,
            }}
          >
            Start Betting Now
          </button>
        </div>

        {/* Bottom Footer Section */}
        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          style={{ borderColor: COLORS.secondaryBg }}
        >
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className="text-lg font-black tracking-tight"
              style={{ color: COLORS.primary }}
            >
              OluBet
            </span>

            <span className="text-xs" style={{ color: COLORS.muted }}>
              © 2026 All rights reserved.
            </span>
          </div>

          <span
            className="text-[10px] leading-tight max-w-md"
            style={{ color: COLORS.muted }}
          >
            Gambling can be addictive. Play responsibly. 18+ only. Terms and
            conditions apply.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer