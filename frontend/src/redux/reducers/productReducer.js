import * as actionTypes from '../constants/productConstants'



export const getProductReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST: 
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
			return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}

export const getProductDetailsReducer = (state = { productDetails: {} }, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                productDetails: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                productDetails: {}
            }
        default:
            return state
    }
}