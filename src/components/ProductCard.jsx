import { Link } from "react-router";

function ProductCard({ product }) {
    return (
        <div>
            <div>
                <img src={product.imageURL} alt="" />
            </div>
            <div className="mt-4">
                <p className="text-sm capitalize mb-1">{product.name}</p>
                <p className="text-xs text-gray-500 mb-1">{product.description}</p>
                <p className="text-sm"> ${product.price}</p>
                <p className="text-sm">In Stock:<span className={` ${product.availability ? "bg-green-500 border-2 border-green-600" : "bg-red-500 border-2 border-red-600"}  px-3 rounded-full text-white capitalize ml-3`}> {product.availability ? "yes" : "no"}</span></p>
            </div>
            <div className="text-center mt-6">
                <Link>
                    <button className="bg-black text-white rounded-full px-7 py-1 hover:bg-orange-700 transition">Buy</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;