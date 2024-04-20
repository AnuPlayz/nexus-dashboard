'use client'
import { UserAuthForm } from "@/components/user-auth-form";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    if (session && session.user) {
        return (
            <div className='w-full h-screen mt-[64px]'>
                <iframe
                    className='w-full h-full'
                    src="https://9b9b19992dd6.quillforms.app/forms/simple-donation-form/"
                    allowFullScreen
                />
            </div>
        );
    }
    else {
        return (
            <div className="flex flex-col items-center justify-center w-full h-screen mt-[64px]">
                <h1 className="text-2xl">Please sign in to access this page</h1>
                <UserAuthForm />
            </div>
        );
    }
}