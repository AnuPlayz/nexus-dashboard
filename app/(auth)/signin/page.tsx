"use client"
import { UserAuthForm } from "@/components/user-auth-form";
import { useSession } from "next-auth/react"


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
