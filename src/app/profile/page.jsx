'use client'

import React from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {


    const { data: session } = authClient.useSession();
    const user = session?.user
    // console.log(user);


    return (
        <div className="bg-[#FCF9F6] min-h-screen flex justify-center items-center p-4">

           {user? 
            <div className="w-full max-w-90 bg-white rounded-3xl border border-gray-200/70 p-6 text-center shadow-xs">

                
                <div className="relative w-24 h-24 rounded-2xl mx-auto overflow-hidden border border-gray-200 bg-[#FCF9F6] mb-4">
                    <Image
                        src={user.image}
                        alt={user.name}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>

                
                <h1 className="text-xl font-serif font-bold tracking-tight text-[#5C1D24]">
                    {user.name}
                </h1>

               
                <p className="text-xs text-gray-400 font-light mt-1 break-all">
                    {user.email}
                </p>

                <Link href="/profile-update">
                    <div className="mt-5 pt-2">
                    <button className="w-full py-2.5 text-xs font-bold tracking-wider text-white bg-[#5C1D24] hover:bg-[#421419] rounded-xl transition-all duration-300 active:scale-98 shadow-xs cursor-pointer">
                        Update Profile
                    </button>
                </div>
                </Link>
            </div>
        : <h1 className="text-xl font-serif font-bold tracking-tight text-[#5C1D24]"> At first login or register</h1>}
            
           
            </div>
    );
};

export default ProfilePage;