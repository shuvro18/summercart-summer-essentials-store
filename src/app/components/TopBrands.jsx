import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";

const TopBrands = () => {
  return (
    <div className="bg-[#FCF9F6]  py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
            Our Partners
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold mt-3 mb-4">
            Top Featured Brands
          </h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Discover our handpicked collection of elite brands dedicated to delivering top-tier quality, sustainability, and premium summer comfort.
          </p>
        </div>
        
        {/* 📱 ৪ কলামের রেসপন্সিভ গ্রিড কন্টেইনার */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 📦 কার্ড ১ */}
          <div className="group cursor-pointer">
            <div className="relative aspect-4/3 w-full rounded-2xl border border-gray-200/70 overflow-hidden bg-white shadow-xs group-hover:shadow-md transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
                alt="Product 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 shadow-xs">
                BEST SELLER
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-[#5C1D24] uppercase">Sunglasses</h3>
                <p className="text-xs text-gray-400 mt-0.5">SunShade Pro</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-gray-700">
                <HiStar className="text-amber-500 text-sm" />
                <span>4.9</span>
              </div>
            </div>
          </div>

          {/* 📦 কার্ড ২ */}
          <div className="group cursor-pointer">
            <div className="relative aspect-4/3 w-full rounded-2xl border border-gray-200/70 overflow-hidden bg-white shadow-xs group-hover:shadow-md transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
                alt="Product 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 shadow-xs">
                GOURMET
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-[#5C1D24] uppercase">Headphones</h3>
                <p className="text-xs text-gray-400 mt-0.5">SoundWave Premium</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-gray-700">
                <HiStar className="text-amber-500 text-sm" />
                <span>4.8</span>
              </div>
            </div>
          </div>

          {/* 📦 কার্ড ৩ */}
          <div className="group cursor-pointer">
            <div className="relative aspect-4/3 w-full rounded-2xl border border-gray-200/70 overflow-hidden bg-white shadow-xs group-hover:shadow-md transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
                alt="Product 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-teal-100 text-teal-700 shadow-xs">
                ARTISAN
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-[#5C1D24] uppercase">Watches</h3>
                <p className="text-xs text-gray-400 mt-0.5">Minimalist White</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-gray-700">
                <HiStar className="text-amber-500 text-sm" />
                <span>4.7</span>
              </div>
            </div>
          </div>

          {/* 📦 কার্ড ৪ */}
          <div className="group cursor-pointer">
            <div className="relative aspect-4/3 w-full rounded-2xl border border-gray-200/70 overflow-hidden bg-white shadow-xs group-hover:shadow-md transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600"
                alt="Product 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 shadow-xs">
                BEST SELLER
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-[#5C1D24] uppercase">Glasses</h3>
                <p className="text-xs text-gray-400 mt-0.5">Retro Vintage</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-gray-700">
                <HiStar className="text-amber-500 text-sm" />
                <span>5.0</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TopBrands;