
function ProductCard({ product }) {
    return (
        <>
            {
                <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                    <img className="w-full h-48 object-cover" src={product.images}></img>
                    <div className="p-6">
                        <p className="text-gray-600 mb-4">{product.category.name}</p>

                        <h4 className="font-semibold text-lg mb-2 truncate text-black overflow-visible">{product.title}</h4>
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        {/* <!-- Price and Button Container --> */}
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">${product.price}</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default ProductCard