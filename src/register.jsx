import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Register() {
  return (
    <div className="w-full h-full grid justify-center items-center bg-[#fffbeb]">
      <div className="flex flex-col gap-6">
        <Card className="overflow-hidden lg:w-[50vw] md:w-[60vw] sm:w-[80vw] mx-auto bg-white backdrop-blur-2xl border-4 border-black p-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl font-mono text-black">
          <CardContent className="grid p-0">
            <form className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Register User</h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="firstname">name</Label>
                  <Input id="firstname" type="text" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="address">address</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                <Label>choose type</Label>
                <Select>
      <SelectTrigger className="w-full">
        
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="HPCL">HPCL</SelectItem>
          <SelectItem value="BPCL">BPCL</SelectItem>
          <SelectItem value="JPCL">JPCL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                </div>
                <div className="grid gap-3">
                <Label>choose location</Label>
                <Select>
      <SelectTrigger className="w-full">
        
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="mys">MYS</SelectItem>
          <SelectItem value="bng">BNG</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="pnumber">Phone Number</Label>
                  <Input id="pnumber" type="number" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">email id</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="address">oname</Label>
                  <Input id="oname" type="text" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="opnumber">oPhone Number</Label>
                  <Input id="opnumber" type="number" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="oemail">oemail id</Label>
                  <Input id="oemail" type="email" required />
                </div>
                </div>
                <Button type="submit" className="w-full">
                  Submit  
                </Button>

                <div className="text-center text-sm">
                  have an account?{" "}
                  <a href="#" className="underline underline-offset-4">
                    login
                  </a>
                </div>
              </div>
            </form>
           
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
