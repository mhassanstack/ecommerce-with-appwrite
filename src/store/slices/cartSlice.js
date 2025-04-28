import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id } = action.payload
            console.log(action.payload)
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem) {
                existingItem.quantity++
                state.totalQuantity++
            }
            else {
                state.items.push(action.payload)
                state.totalQuantity++
            }
            console.log(state.items)
        },
        increaseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.quantity += 1
                state.totalQuantity++
            }
        },
        decreaseQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1
                state.totalQuantity--
            }
        },
        removeFromCart(state, action) {
            console.log(action.payload)
            const selectedItem = state.items.find(item => item.id === action.payload)
            state.items = state.items.filter(item => item.id !== action.payload)
            state.totalQuantity = state.totalQuantity - selectedItem.quantity
        }
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions
export default cartSlice.reducer