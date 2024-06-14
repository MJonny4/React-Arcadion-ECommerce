/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useEffect, useReducer } from 'react'
import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT_SUCCESS,
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN,
} from '../actions'
import reducer from '../reducers/products_reducer'
import { customFetch } from '../utils/customFetch'

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
}

const ProductsContext = React.createContext(null)

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }

    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }

    const fetchProducts = async () => {
        dispatch({ type: GET_PRODUCTS_BEGIN })
        try {
            const response = await customFetch.get('/products')
            const products = response.data?.records
            const returningData = products.map((product) => {
                const { id, fields } = product
                return {
                    id,
                    image: fields.images[0].url,
                    ...fields,
                }
            })
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: returningData })
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR })
        }
    }

    const fetchSingleProduct = async (id: string) => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
        try {
            const response = await customFetch.get(`/products/${id}`)
            const singleProduct = response.data
            const returningData = {
                id: singleProduct.id,
                image: singleProduct.fields.images[0].url,
                ...singleProduct.fields,
            }
            dispatch({
                type: GET_SINGLE_PRODUCT_SUCCESS,
                payload: returningData,
            })
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}

// make sure use
export const useProductsContext = () => {
    return useContext(ProductsContext)
}
