import React, { useContext, useEffect, useReducer } from 'react'
import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from '../actions'
import reducer from '../reducers/cart_reducer'

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
}

const CartContext = React.createContext(null)

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: { id, color, amount, product },
        })
    }

    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS })
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    const removeItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id })
    }

    const toggleAmount = (id, value) => {
        dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
    }

    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

// make sure use
export const useCartContext = () => {
    return useContext(CartContext)
}
