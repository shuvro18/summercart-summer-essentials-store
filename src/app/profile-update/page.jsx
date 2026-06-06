'use client'

import React, { useState } from 'react';
// import Link from 'next/link';
import { HiOutlineUser, } from 'react-icons/hi';
// import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { success } from 'better-auth';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';



const ProfilePage = () => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false); // Better-Auth 
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await authClient.updateUser({
                image: url,
                name: name,
            })
            router.push("/profile");
            toast.success("update successful")
        }finally{
            setLoading(false)
        }
    }



    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">

            {/* ব্যাকগ্রাউন্ড গ্লোয়িং ইফেক্ট */}
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* মেইন রেজিস্টার কার্ড (Glassmorphism) */}
            <div className="max-w-md w-full backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl z-10">

                {/* হেডিং */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 tracking-wide">
                        Summer<span className="text-secondary">CART</span>
                    </h1>
                    <p className="text-slate-400 text-xs mt-2">Create your account to start shopping.</p>
                </div>

                {/* ফর্ম শুরু */}
                <form onSubmit={handleRegister} className="space-y-4">

                    {/* ১. নাম (Full Name) ফিল্ড */}
                    <div className="form-control w-full">
                        <label className="label pt-0">
                            <span className="label-text text-slate-300 font-medium text-xs">Full Name</span>
                        </label>
                        <div className="relative flex items-center bg-slate-950/40 rounded-xl border border-white/10 focus-within:border-purple-500 transition-all">
                            <div className="pl-4 text-slate-400">
                                <HiOutlineUser className="text-lg" />
                            </div>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="input input-ghost w-full bg-transparent text-white placeholder-slate-600 border-none focus:outline-none h-12 text-sm"
                            />
                        </div>
                    </div>

                    {/* URL Fieldset */}
                    <div className="form-control w-full">
                        <label className="label pt-0">
                            <span className="label-text text-slate-300 font-medium text-xs">Image Url</span>
                        </label>
                        <div className="relative flex items-center bg-slate-950/40 rounded-xl border border-white/10 focus-within:border-purple-500 transition-all">
                            <div className="pl-4 text-slate-400">
                                <HiOutlineUser className="text-lg" />
                            </div>
                            <input
                                type="text"
                                placeholder="www.image_link.com"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                required
                                className="input input-ghost w-full bg-transparent text-white placeholder-slate-600 border-none focus:outline-none h-12 text-sm"
                            />
                        </div>
                    </div>





                    {/* সাইন আপ বাটন (লোডিং স্টেট সহ) */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none w-full h-12 min-h-0 rounded-xl text-white font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-500/25 mt-2 flex items-center justify-center gap-2"
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : 'update profile'}
                    </button>
                </form>




            </div>
        </div>
    );
};

export default ProfilePage;