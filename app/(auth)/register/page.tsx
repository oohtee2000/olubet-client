"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, UserPlus } from "lucide-react"
import toast from "react-hot-toast"

import { registerUser } from "@/lib/api/user"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const Signup = () => {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")   // ✅ added
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !phone || !password || !confirmPassword) {
      toast.error("Please fill in all fields.")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.")
      return
    }

    try {
      setLoading(true)

      await registerUser({
        name,
        email,
        phone,
        password,
      })

      toast.success("Account created successfully!")

      setTimeout(() => {
        router.push("/login")
      }, 1000)

    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("Something went wrong")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--app-bg)] p-6">

      <div className="w-full max-w-5xl grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">

        {/* LEFT PANEL */}
        <div
          className="hidden md:flex flex-col justify-center p-12 space-y-6"
          style={{ background: "#13263A" }}
        >
          <h1 className="text-4xl font-bold italic tracking-tight text-white">
            OluBet
          </h1>

          <p className="text-lg leading-relaxed text-gray-300">
            Create an account and start your betting journey.
            Secure. Fast. Reliable.
          </p>
        </div>

        {/* FORM PANEL */}
        <Card className="border-0 rounded-none md:rounded-r-2xl bg-card">
          <CardContent className="p-10 md:p-14">

            <div className="space-y-2 mb-8">
              <h2 className="text-2xl font-semibold">
                Create Account
              </h2>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">

              {/* Name */}
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Email ✅ */}
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label>Mobile Number</Label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12"
              >
                {loading ? "Creating..." : "Create Account"}
              </Button>

            </form>

            <div className="mt-8 text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium underline"
              >
                Login
              </Link>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Signup