
"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, LogIn } from "lucide-react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { loginUser } from "@/lib/api/user"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

const Login = () => {
    const router = useRouter();
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!phone.trim() || !password.trim()) {
    toast.error("Please fill in all fields.")
    return
  }

  try {
    const res = await loginUser({
      email: phone,   // ⚠️ see note below
      password,
    })

    toast.success(res.message || "Login successful!")
    router.push("/home")   // redirect after login
  } catch (err: unknown) {
    if (err instanceof Error) {
      toast.error(err.message)
    } else {
      toast.error("Login failed")
    }
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--app-bg)] p-6">

      <div className="w-full max-w-5xl grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">

       {/* LEFT SIDE (Brand Panel) */}
<div
  className="hidden md:flex flex-col justify-center p-12 space-y-6"
  style={{
    background: "#13263A", // Professional dark brand panel tone
  }}
>
  <h1
    className="text-4xl font-bold italic tracking-tight"
    style={{ color: "#F5F7FA" }}
  >
    OluBet
  </h1>

  <p
    className="text-lg leading-relaxed"
    style={{ color: "rgba(245,247,250,0.85)" }}
  >
    The ultimate betting experience platform.
    Secure. Fast. Reliable.
  </p>

  <div className="space-y-2 text-sm">
    <p style={{ color: "rgba(245,247,250,0.8)" }}>✔ Secure authentication</p>
    <p style={{ color: "rgba(245,247,250,0.8)" }}>✔ Real-time betting</p>
    <p style={{ color: "rgba(245,247,250,0.8)" }}>✔ Fast withdrawals</p>
  </div>
</div>

        {/* RIGHT SIDE (Form Panel) */}
        <Card className="border-0 rounded-none md:rounded-r-2xl bg-card">

          <CardContent className="p-10 md:p-14">

            <div className="space-y-2 mb-8">
              <h2 className="text-2xl font-semibold text-[var(--heading)]">
                Welcome Back
              </h2>
              <p className="text-[var(--muted)]">
                Sign in to continue to your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">

              <div className="space-y-2">
                <Label>Mobile Number</Label>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 bg-[var(--secondary-bg)]"
                />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10 bg-[var(--secondary-bg)]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={rememberMe}
                    onCheckedChange={(c) => setRememberMe(c === true)}
                  />
                  <span className="text-sm text-muted-foreground">
                    Remember me
                  </span>
                </div>

                <Link
                  href="#"
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-text)"
                }}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-[var(--primary)] font-medium hover:underline"
              >
                Sign Up
              </Link>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login