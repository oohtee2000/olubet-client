import TopNavbar from "./top-nav"
import SportNav from "./sport-nav"

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50">
      <TopNavbar />
      <SportNav />
    </div>
  )
}