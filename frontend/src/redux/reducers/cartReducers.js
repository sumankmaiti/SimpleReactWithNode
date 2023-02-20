import * as actionTypes from "../constants/cartConstants"

const CARRT_INITIAL_STATE = {
    cartItems: []
}

export const cartReducer = (state = CARRT_INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item  = action.payload;

            const isItemExist = state.cartItems.find((existingItem) => existingItem.productID === item.productID)

            if (isItemExist) {
                console.log('item found');
                return {
                    ...state, cartItems: state.cartItems.map((existingItem) => existingItem.productID === item.productID ? item : existingItem)
                }
            }

            else {
                console.log('added');
                return {
                    ...state, cartItems: state.cartItems.push(item)
                    // ...state, cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            console.log('removed');
            return {
                ...state, cartItems: state.cartItems.filter((existingItem) => existingItem.productID !== item.productID)
            }
        default:
            return state
    }
}