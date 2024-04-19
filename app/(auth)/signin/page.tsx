"use client"
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

/*export const metadata: Metadata = {
  title: "Login | Nexus Dashboard",
  description: "Login to your account",
};*/  

export default function LoginPage() {
  const { data: session } = useSession();
  {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
          <div className="flex flex-col gap-2 text-center">
            {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to Nexus Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">Login to your account</p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    );
  }
}
