

import Image from "next/image";
import { HiStar } from "react-icons/hi";
import NavLink from "./NavLink";

const Products = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const product = await res.json();
    console.log(product);
    return (
        <div>
            <div className="flex justify-center items-center gap-5  pt-10">
                <NavLink href="/" className=" text-xl font-bold text-center" > Popular Products </NavLink>
                <NavLink href="/summercare" className=" text-xl font-bold text-center " > Summer Care Tips </NavLink>
                <NavLink href="/topbrands" className=" text-xl font-bold text-center " > Top Brands </NavLink>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 container mx-auto py-10">
                {product.slice(0, 3).map((product) => (
                    <div key={product.id} className="group  flex flex-col justify-between border border-secondary rounded-2xl">

                        <div>
                            {/* ১. ইমেজ কন্টেইনার (লুক একদম আগের মতোই থাকবে) */}
                            <div className="relative aspect-4/3 w-full rounded-2xl border border-gray-200/70 overflow-hidden bg-white shadow-xs group-hover:shadow-md transition-all duration-300">

                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />

                                {/* ক্যাটাগরি অনুযায়ী ছবির ওপরের ব্যাজ */}
                                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 shadow-xs uppercase">
                                    {product.category}
                                </span>

                                {/* স্টক আউট থাকলে সুন্দর একটি আবছা লেয়ার দেখাবে */}
                                {product.stock === 0 && (
                                    <div className="absolute inset-0 bg-black/40 flex justify-center items-center backdrop-blur-xs">
                                        <span className="bg-white/90 text-red-600 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md">
                                            OUT OF STOCK
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* ২. নিচের টেক্সট ও ডাটা সেকশন (ক্লিন ও গোছানো) */}
                            <div className="mt-4 px-1 space-y-1">
                                {/* ব্র্যান্ডের নাম */}
                                <p className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                                    {product.brand}
                                </p>

                                {/* প্রোডাক্টের নাম এবং ডান পাশে রেটিং */}
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-sm font-semibold tracking-tight text-[#5C1D24] line-clamp-1">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-0.5 text-xs font-bold text-gray-700 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200/50 shrink-0">
                                        <HiStar className="text-amber-500 text-sm" />
                                        <span>{product.rating.toFixed(1)}</span>
                                    </div>
                                </div>

                                {/* প্রোডাক্টের ছোট বিবরণ (Description) */}
                                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed pt-0.5 font-light">
                                    {product.description}
                                </p>
                            </div>
                        </div>

                        {/* ৩. দাম এবং অ্যাকশন বাটন (কার্ডের একদম নিচে সুন্দরভাবে এলাইন থাকবে) */}
                        <div className="mt-4 px-1 flex items-center justify-between border-t border-gray-100 pt-3">
                            <div>
                                <p className="text-[10px] text-gray-400 font-medium">Price</p>
                                <p className="text-base font-bold text-emerald-600">${product.price}</p>
                            </div>

                            {/* মিনিমালিস্ট 'Add' বাটন */}
                            <button
                                disabled={product.stock === 0}
                                className="px-4 py-2 text-xs font-bold text-white bg-[#5C1D24] hover:bg-[#421419] disabled:bg-gray-200 disabled:text-gray-400 rounded-xl transition-all active:scale-95 shadow-xs"
                            >
                                Show details
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;