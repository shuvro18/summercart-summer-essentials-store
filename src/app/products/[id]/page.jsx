

const ProductDetailsPage = async({params}) => {
    const {id} =await params;
    console.log(id)
    return (
        <div>
            hello
        </div>
    );
};

export default ProductDetailsPage;