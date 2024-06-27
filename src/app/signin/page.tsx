"use client"
import React, { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';



export default function page() {


  const { toast } = useToast()
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = async () => {
    await signIn('credentials', {
      email, password, redirect: false
    })
    router.push("/")
  }

 

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
              </div>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password" type="password" required />
            </div>
            <Button 
            onClick={clickHandler}
            type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Phone Number
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://images.unsplash.com/photo-1591925323507-c8cd5aa3d39a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdyaXRlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

  )
}
