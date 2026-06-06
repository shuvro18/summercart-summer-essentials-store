"use client";

import React, { useState } from 'react';
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const { data, error } = await authClient.signIn.email({
        email: email, // required
        password: password, // required
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message)
      }
    } catch (err) {
      console.error(err);
    }
  };

   // Google based login handler
  const HandleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">

      {/* ব্যাকগ্রাউন্ডের জন্য গ্লোয়িং অ্যাম্বিয়েন্ট লাইট */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* মেইন লগইন কার্ড (Glassmorphism Box) */}
      <div className="max-w-md w-full backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl z-10">

        {/* ব্র্যান্ড লোগো/নাম */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 tracking-wide">
            Summer<span className="text-secondary">CART</span>
          </h1>
          <p className="text-slate-400 text-xs mt-2">Welcome back! Please enter your details.</p>
        </div>

        {/* ফর্ম শুরু */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ইমেইল ইনপুট ফিল্ড */}
          <div className="form-control w-full">
            <label className="label pt-0">
              <span className="label-text text-slate-300 font-medium text-xs">Email Address</span>
            </label>
            <div className="relative flex items-center bg-slate-950/40 rounded-xl border border-white/10 focus-within:border-purple-500 transition-all">
              <div className="pl-4 text-slate-400">
                <HiOutlineLockClosed className="text-lg" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="input input-ghost w-full bg-transparent text-white placeholder-slate-600 border-none focus:outline-none h-12 text-sm"
              />
            </div>
          </div>

          {/* পাসওয়ার্ড ইনপুট ফিল্ড */}
          <div className="form-control w-full">
            <label className="label pt-0 flex justify-between">
              <span className="label-text text-slate-300 font-medium text-xs">Password</span>
              <a href="#" className="label-text-alt text-xs text-purple-400 hover:text-pink-400 transition-colors">Forgot password?</a>
            </label>
            <div className="relative flex items-center bg-slate-950/40 rounded-xl border border-white/10 focus-within:border-purple-500 transition-all">
              <div className="pl-4 text-slate-400">
                <HiOutlineLockClosed className="text-lg" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="input input-ghost w-full bg-transparent text-white placeholder-slate-600 border-none focus:outline-none h-12 text-sm pr-12"
              />
              {/* পাসওয়ার্ড দেখানো/লুকানোর বাটন */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <HiOutlineEyeOff className="text-lg" /> : <HiOutlineEye className="text-lg" />}
              </button>
            </div>
          </div>

          {/* রিমেম্বার মি চেকবক্স */}
          <div className="flex items-center justify-between pt-1">
            <label className="label cursor-pointer justify-start gap-3 p-0">
              <input type="checkbox" className="checkbox checkbox-xs checkbox-secondary rounded" />
              <span className="label-text text-slate-400 text-xs selection:bg-transparent">Remember me</span>
            </label>
          </div>

          {/* সাইন ইন বাটন */}
          <button
            type="submit"
            className="btn btn-primary bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none w-full h-12 min-h-0 rounded-xl text-white font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-500/25 mt-2"
          >
            Sign In
          </button>
        </form>

        {/* Or Divider */}
        <div className="divider my-6 text-slate-500 text-xs font-light">OR CONTINUE WITH</div>

        {/* সোশ্যাল লগইন বাটন গ্রুপ */}
        <div className="">
          <button onClick={HandleGoogleLogin} className=" w-full btn btn-outline border-white/10 hover:border-white/20 bg-slate-950/20 text-white rounded-xl gap-2 font-medium text-xs h-11 min-h-0 normal-case">
            <FcGoogle className="text-lg" />
            Google
          </button>

        </div>

        {/* রেজিস্টার লিংক */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Do not have an account?{' '}
          <Link href="/register" className="text-purple-400 font-semibold hover:underline">Sign up for free</Link>

        </p>

      </div>
    </div>
  );
};

export default LoginForm;