import React from "react";
import Image from "next/image";
import { HiOutlineSun, HiOutlineBeaker, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";

const SummerCarePage = () => {
  return (
    <div className="bg-[#FCF9F6] min-h-screen py-16 px-4 sm:px-8 lg:px-16 text-[#5C1D24]">
      <div className="max-w-6xl mx-auto">
        
        {/* ☀️ 1. Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
            Summer Essentials
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold mt-3 mb-4">
            Summer Care Guide
          </h1>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Beat the heat with our curated expert tips to keep your skin glowing, your body hydrated, and your health at its peak during the sunny days.
          </p>
        </div>

        {/* 🌊 2. Main Banner Image */}
        <div className="relative aspect-21/9 w-full rounded-3xl overflow-hidden border border-gray-200/60 shadow-xs mb-16 bg-white">
          <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200" 
            alt="Summer relaxation and care" 
            fill 
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#5C1D24]/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white">
            <h2 className="text-lg sm:text-2xl font-serif font-medium">Radiant & Healthy All Summer</h2>
          </div>
        </div>

        {/* 📚 3. Tips Grid Section (Responsive: 1 column on mobile, 2 columns on laptop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Card 1: Skincare */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/60 shadow-xs space-y-4">
            <div className="w-12 h-12 bg-rose-50 text-rose-700 rounded-xl flex items-center justify-center">
              <HiOutlineSparkles size={24} />
            </div>
            <h3 className="text-lg font-serif font-semibold">1. Sun Protection & Skincare</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Protect your skin from harsh UV rays by applying a broad-spectrum sunscreen with at least <strong>SPF 30+</strong> everyday. Reapply every two hours when outdoors. Opt for lightweight, water-based or gel moisturizers to keep your skin hydrated without feeling greasy.
            </p>
            <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4 font-light">
              <li>Apply sunscreen 20 minutes before heading out</li>
              <li>Wash your face twice daily with a gentle cleanser</li>
              <li>Exfoliate weekly to remove accumulated sweat and dead skin cells</li>
            </ul>
          </div>

          {/* Card 2: Hydration */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/60 shadow-xs space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
              <HiOutlineBeaker size={24} />
            </div>
            <h3 className="text-lg font-serif font-semibold">2. Ultimate Hydration Tips</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Prevent dehydration by drinking at least <strong>2.5 to 3 liters</strong> of water daily. Avoid sugary sodas or excessive caffeine, as they can dehydrate you further. Instead, refresh yourself with natural coconut water, fresh lime juice, or water-rich fruits.
            </p>
            <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4 font-light">
              <li>Carry a reusable water bottle wherever you go</li>
              <li>Incorporate watermelons, cucumbers, and oranges into your diet</li>
              <li>Drink fluids continuously even before you feel thirsty</li>
            </ul>
          </div>

          {/* Card 3: Clothing */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/60 shadow-xs space-y-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center">
              <HiOutlineSun size={24} />
            </div>
            <h3 className="text-lg font-serif font-semibold">3. Clothing & Outdoor Styling</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Dark colors absorb more heat, making you feel warmer. Choose loose-fitting, lightweight clothing made of breathable fabrics like <strong>pure cotton or linen</strong>. Protect your eyes and face by wearing UV-protection sunglasses and wide-brimmed hats when traveling.
            </p>
            <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4 font-light">
              <li>Wear light colors like white, beige, and soft pastels</li>
              <li>Always wear sunglasses to shield your eyes from glare</li>
              <li>Use an umbrella or cap during peak sunny hours</li>
            </ul>
          </div>

          {/* Card 4: Wellness */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/60 shadow-xs space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center">
              <HiOutlineShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-serif font-semibold">4. Healthy Diet & Wellness</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Stomach issues are common during summer due to food spoilage. Avoid heavy, oily, or deep-fried street food. Stick to freshly prepared, home-cooked light meals. Try to avoid strenuous outdoor physical activities between 11 AM and 3 PM when the sun is harshest.
            </p>
            <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4 font-light">
              <li>Eat smaller, frequent meals that are easy to digest</li>
              <li>Avoid consuming stale or unrefrigerated dairy products</li>
              <li>Ensure 7-8 hours of quality sleep to help your body recover</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SummerCarePage;