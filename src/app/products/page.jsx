

import SingleProduct from "../components/SingleProduct";



const Products = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const product = await res.json();
    // console.log(product);
    return (
        <div>
            
            <p className=" text-4xl text-center font-bold tracking-wider text-gray-400 hover:text-[#5C1D24] transition-colors uppercase ">All Products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 max-w-6xla mx-auto py-10">
                {product.map((product) => <SingleProduct key={product.id} product={product}></SingleProduct>)}
            </div>
        </div>
    );
};

export default Products;