import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../store/slices/cartSlice";
import cross from '../assets/cross.png'


function Checkout() {

    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

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
                    <table className="w-full border-separate table-fixed border-spacing-y-8 bg-[#e9e9e970] px-3">
                        <tr>
                            <td className="w-auto pl-6">product</td>
                            <td className="w-[180px] ml-4">quantity</td>
                            <td className="w-[120px] text-center">total price</td>
                        </tr>
                        {
                            cartItems.map((cartItem, index) => {
                                return (

                                    <tr className="px-1 py-2 shadow-lg rounded-full bg-[#e9e9e9]" key={index}>
                                        <td className="py-3 pl-3">
                                            <div className="flex items-center gap-5">
                                                <img src={cartItem.productImage} alt="" className="w-10" />
                                                <p>{cartItem.name}</p>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="flex items-center gap-3">
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
                                                <button className="h-[30px] w-[30px] bg-[#e6e6e6] flex items-center justify-center rounded-full ">
                                                    <img src={cross} className="w-[25px]" alt=""
                                                        onClick={() => handleRemoveFromCart(cartItem.id)}
                                                    />
                                                </button >
                                            </div>
                                        </td>

                                        <td>
                                            <div className="text-center">
                                                <p className="px-2 border bg-[#e6e6e6] border-black rounded-full w-fit mx-auto">{cartItem.price}$</p>
                                            </div>
                                        </td>
                                    </tr>

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