


import Image from "next/image";
import { HiStar, HiArrowLeft, HiOutlineShoppingBag, HiCheckCircle } from "react-icons/hi";

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("http://localhost:3000/data.json");
    const products = await res.json();

    const find = products.find(product => product.id === parseInt(id));
    console.log(find)


 

    return (
        <div>
            <div className=" min-h-screen py-12 px-4 sm:px-8 lg:px-16">
                <div className="max-w-5xl mx-auto">

                    {/* 🔙 ব্যাক বাটন (ছবির থিম অনুযায়ী) */}
                    <button className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-gray-400 hover:text-[#5C1D24] transition-colors uppercase mb-8">
                        <HiArrowLeft size={16} /> Back to Collection
                    </button>

                    {/* 📦 মেইন কন্টেইনার গ্রিড: মোবাইলে ১ কলাম, ল্যাপটপে ২ কলাম */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  p-5 sm:p-10 rounded-3xl border border-gray-200/60 shadow-xs">

                        {/* 🖼️ বাম পাশে: ইমেজ সেকশন (Aspect 4:3 ঠিক রাখা হয়েছে) */}
                        <div className="relative aspect-4/3 w-full rounded-2xl border border-gray-200/70 overflow-hidden bg-[#FCF9F6]">
                            <Image
                                src={find.image}
                                alt={find.name}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            {/* ছবির ওপরের ক্যাটাগরি ব্যাজ */}
                            <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 uppercase">
                                {find.category}
                            </span>
                        </div>

                        {/* 📝 ডান পাশে: প্রোডাক্টের সমস্ত ইনফরমেশন */}
                        <div className="space-y-5">

                            {/* ব্র্যান্ড ও মেইন নাম */}
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                                    {find.brand}
                                </p>
                                <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#5C1D24]">
                                    {find.name}
                                </h1>
                            </div>

                            {/* রেটিং এবং স্টক কাউন্ট */}
                            <div className="flex items-center gap-5 border-b border-gray-100 pb-4">
                                {/* রেটিং স্টার */}
                                <div className="flex items-center gap-1 text-xs font-bold text-gray-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50">
                                    <HiStar className="text-amber-500 text-base" />
                                    <span>{find.rating}</span>
                                </div>

                                {/* স্টক স্ট্যাটাস */}
                                <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                                    <HiCheckCircle className="text-emerald-500 text-base" />
                                    <span>In Stock ({find.stock} available)</span>
                                </div>
                            </div>

                            {/* ডেসক্রিপশন বা বিবরণ */}
                            <div className="space-y-1">
                                <h4 className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Details</h4>
                                <p className="text-xs text-gray-600 leading-relaxed font-light">
                                    {find.description}
                                </p>
                            </div>

                            {/* প্রাইস এবং কার্ট বাটন */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Price</p>
                                    <p className="text-2xl font-black text-emerald-600">${find.price}</p>
                                </div>

                                {/* এড টু কার্ট বাটন */}
                                <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-[#5C1D24] hover:bg-[#421419] rounded-xl transition-all active:scale-95 shadow-xs">
                                    <HiOutlineShoppingBag size={16} />
                                    Add to Cart
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;