import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../store/slices/cartSlice";
import { Link } from "react-router";
import cross from '../assets/cross.png'

function Cart({ isSidebarOpen, setIsSidebarOpen }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(store => store.cart.items)
    const totalProdsInCart = useSelector(store => store.cart.totalQuantity)

    function handleIncreaseQuantity(prodId) {
        console.log("prodId", prodId)
        dispatch(
            increaseQuantity(prodId)
        )
    }
    function handledecreaseQuantity(prodId) {
        dispatch(
            decreaseQuantity(prodId)
        )
    }

    function handleRemoveFromCart(prodId) {
        dispatch(
            removeFromCart(prodId)
        )
    }

    return (
        <div className={`h-[100vh] w-[480px] bg-white shadow-xl fixed flex flex-col right-0 top-0 bottom-0 transition duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-[100%]"}`}>

            <div className="flex items-center justify-between px-4">
                <h1 className="my-5 text-lg text-center capitalize">cart items</h1>
                <button className="h-[30px] w-[30px] bg-[#e6e6e6]  flex items-center justify-center rounded-full"
                    onClick={
                        () => {
                            setIsSidebarOpen(!isSidebarOpen)
                        }
                    }>
                    <img src={cross} className="w-[25px]" alt="" />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto">
                {
                    cartItems.map((cartItem, index) => {
                        return (
                            <div className="relative flex items-center py-4 mb-6 bg-white shadow-lg w-[90%] mx-auto rounded-xl justify-evenly" key={index}>
                                <button className="h-[30px] w-[30px] bg-[#e6e6e6] flex items-center justify-center rounded-full absolute left-2 top-1/2 translate-y-[-50%]">
                                    <img src={cross} className="w-[25px]" alt=""
                                        onClick={() => handleRemoveFromCart(cartItem.id)}
                                    />
                                </button >
                                <img src={cartItem.productImage} alt="" className="w-10" />

                                <div className="flex items-center justify-center gap-2 px-2 py-[2px] border border-black rounded-full">
                                    <button className="h-[20px] w-[25px] flex items-center justify-center  rounded-lg"
                                        onClick={() => {
                                            handledecreaseQuantity(cartItem.id)
                                        }}
                                    >-</button>
                                    <div className="h-[20px] w-[25px] flex items-center justify-center rounded-lg  text-center">{cartItem.quantity}</div>
                                    <button className="h-[20px] w-[25px] flex items-center justify-center rounded-lg "
                                        onClick={() => {
                                            handleIncreaseQuantity(cartItem.id)
                                        }}
                                    >+</button>
                                </div>
                                <div>
                                    <p className="px-2 border bg-[#e6e6e6] border-black rounded-full">{cartItem.price}$</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="">
                <Link to='/checkout'>
                    <button className="relative w-full py-3 text-white transition duration-100 bg-orange-700 hover:bg-black">
                        Checkout <span className="absolute px-2 pb-[1px] text-xs bg-black rounded-full top-1/2 translate-y-[-50%] right-4"> {totalProdsInCart} items</span>
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Cart;