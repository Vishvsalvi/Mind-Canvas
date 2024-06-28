"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react";

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { signUp } from "../actions/user"
import { useRouter } from "next/navigation"

export default function page() {

  const { toast } = useToast()
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const clickHandler = async () => {
    
    const isSignUp: { email: string; password: string; } = await signUp(firstName, lastName, phoneNumber, email, password) as { email: string; password: string; };
    
    if(Object.keys(isSignUp).length){
      await signIn('credentials', {email: isSignUp.email, password: isSignUp.password, redirect:false})
      toast({
        description: "Successfully Signed up"
      })
      router.push("/")
      return
    }

    toast({
      description: "User already exists with the same email or phone number! Please sign in",
      variant: "destructive"
    })

  }



  return (
    <Card className="mt-10 mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up to Mind Canvas</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}

                id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phone"
              type="text"
              placeholder="1234567980"
              required
            />
          </div>
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
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password" type="password" />
          </div>
          <Button
            onClick={clickHandler}
            className="w-full">
            Create an account
          </Button>

        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
