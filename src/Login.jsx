import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LoginImg from "./assets/login_img.jpg"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export default function Login() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden w-[300px] md:w-[400px] mx-auto bg-white/10 backdrop-blur-2xl rounded-xl border-0 p-6 sm:p-2 shadow-lg">
        <CardContent className="grid p-0">
          <form className="p-6 md:p-8 sm:p-2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className=" text-balance text-gray-900 dark:text-gray-400">
                  Login to your FS account
                </p>
              </div>
              <div className="grid gap-3">
                <Label  htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
             
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
          {/* <div className="bg-muted relative hidden md:block">
            <img
              src={LoginImg}
              alt="Image"
              className="absolute bottom-0  h-full w-full object-cover  dark:brightness-[0.2] dark:grayscale"
            />
          </div> */}
        </CardContent>
      </Card>
      {/* <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  )
}
