import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../store/slices/cartSlice";

function ProductCard({ product }) {
    const dispach = useDispatch()
    const addToCartHandler = () => {
        dispach(
            addToCart(
                {
                    id: product.$id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    productPrice: product.price,
                    productImage: product.imageURL
                }
            )
        )
    }

    return (
        <div>
            <div>
                <img src={product.imageURL} alt="" />
            </div>
            <div className="mt-4">
                <p className="mb-1 text-sm capitalize">{product.name}</p>
                <p className="mb-1 text-xs text-gray-500">{product.description}</p>
                <p className="text-sm"> ${product.price}</p>
                <p className="text-sm">In Stock:<span className={` ${product.availability ? "bg-green-500 border-2 border-green-600" : "bg-red-500 border-2 border-red-600"}  px-3 rounded-full text-white capitalize ml-3`}> {product.availability ? "yes" : "no"}</span></p>
            </div>
            <div className="flex justify-center gap-3 mt-6 text-center">
                <Link to={`/product-page/${product.$id}`}>
                    <button className="py-1 text-white transition bg-black rounded-full px-7 hover:bg-orange-700">Buy</button>
                </Link>
                <Link onClick={addToCartHandler}>
                    <button className="py-1 text-white capitalize transition bg-orange-700 rounded-full px-7 hover:bg-black">Add to cart</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;