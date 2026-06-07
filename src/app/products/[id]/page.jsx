


import Image from "next/image";
import { HiStar, HiOutlineShoppingBag, HiCheckCircle } from "react-icons/hi";
import products from '@/data/data.json'

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    // data fetch
    // const res = await fetch("http://localhost:3000/data.json");
    // const products = await res.json();

    // find data by id
    const find = products.find(product => product.id === parseInt(id));
    // console.log(find)


 

    return (
        <div>
            <div className=" min-h-screen py-12 px-4 sm:px-8 lg:px-16">
                <div className="max-w-5xl mx-auto">

                   
                    {/* responsive div */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  p-5 sm:p-10 rounded-3xl border border-gray-200/60 shadow-xs">

                        
                        <div className="relative aspect-4/3 w-full rounded-2xl border border-gray-200/70 overflow-hidden bg-[#FCF9F6]">
                            <Image
                                src={find.image}
                                alt={find.name}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            
                            <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 uppercase">
                                {find.category}
                            </span>
                        </div>

                        
                        <div className="space-y-5">

                            
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                                    {find.brand}
                                </p>
                                <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#5C1D24]">
                                    {find.name}
                                </h1>
                            </div>

                            
                            <div className="flex items-center gap-5 border-b border-gray-100 pb-4">
                               
                                <div className="flex items-center gap-1 text-xs font-bold text-gray-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50">
                                    <HiStar className="text-amber-500 text-base" />
                                    <span>{find.rating}</span>
                                </div>

                                
                                <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                                    <HiCheckCircle className="text-emerald-500 text-base" />
                                    <span>In Stock ({find.stock} available)</span>
                                </div>
                            </div>

                            
                            <div className="space-y-1">
                                <h4 className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Details</h4>
                                <p className="text-xs text-gray-600 leading-relaxed font-light">
                                    {find.description}
                                </p>
                            </div>

                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Price</p>
                                    <p className="text-2xl font-black text-emerald-600">${find.price}</p>
                                </div>

                               
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