import { useSelector } from "react-redux";
import store from "../store/store";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../store/slices/cartSlice";
import cross from '../assets/cross.png'


function Checkout() {

    const cartItems = useSelector(store => store.cart.items)

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
        <div className="mx-20 mt-10">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <div className="grid grid-cols-12 mt-5">
                <div className="col-span-8">
                    <table>
                        <tr>
                            <td>product</td>
                            <td>quantity</td>
                            <td>total price</td>
                        </tr>
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
                    </table>
                </div>
                <div className="col-span-4">

                </div>
            </div>
        </div>
    );
}

export default Checkout;