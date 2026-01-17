import CategoryChips from "./CategoryChips"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

function ProductCard({ product }) {
    return (
        <>
            {
                <div className="w-full sm:w-full mx-auto sm:mx-0 max-w-xs sm:max-w-none bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                    <div className="relative">
                        <img className="w-full h-48 object-cover" src={product.images}></img>
                        <CategoryChips name={product.category.name} />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between">

                            <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        </div>

                        <h4 className="font-semibold text-lg mb-2 text-black">{product.title}</h4>
                        <p className="text-gray-600 mb-4 truncate">{product.description}</p>

                        {/* <!-- Price and Button Container --> */}
                        <div className="flex flex-col gap-2 items-center">


                            <SecondaryButton name={'View details'} />
                            <PrimaryButton name={'Add to Cart'} />

                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default ProductCard