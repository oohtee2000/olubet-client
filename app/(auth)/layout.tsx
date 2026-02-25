export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#0B1C2D",
        color: "#F5F7FA",
      }}
    >
      {children}
    </div>
  )
}