import OddsTable from "@/components/home/odds-table"

export default function HomePage() {
  return (
    <div className="flex gap-4 p-4">
      {/* First Component */}
      <OddsTable />

      {/* You can later add Sidebar or Betslip here */}
      {/* <Sidebar /> */}
    </div>
  )
}