"use client";

import React from 'react';
import Link from 'next/link';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const FooterPage = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-white/10 overflow-hidden">
      
     
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
         
          <div className="space-y-4">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 tracking-wide">
              Summer<span className="text-secondary">CART</span>
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your ultimate destination for modern shopping. Discover the best deals with an unmatched premium experience.
            </p>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <HiOutlineMail className="text-lg text-purple-500" />
                <span>support@summercart.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <HiOutlinePhone className="text-lg text-pink-500" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <HiOutlineLocationMarker className="text-lg text-cyan-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/*  (Social Links) */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase">Follow Us</h3>
            <p className="text-sm text-slate-400">Stay connected on our social media handles for exciting updates.</p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.facebook.com/shuvro.biswas.nayon" target='_blank' rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 hover:scale-110">
                <FaFacebookF size={16} />
              </a>
              <a href="#"  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300 hover:scale-110">
                <FaTwitter size={16} />
              </a>
              <a href="https://www.instagram.com/nayon____________/" target='_blank' rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all duration-300 hover:scale-110">
                <FaInstagram size={16} />
              </a>
              <a href="https://github.com/shuvro18" target='_blank' rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-110">
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase">Legal & Policies</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors block">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition-colors block">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-purple-400 transition-colors block">Refund Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} SummerCART. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/cookies" className="hover:underline">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterPage;