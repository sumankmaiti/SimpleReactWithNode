import * as actionTypes from "../constants/cartConstants"

const CARRT_INITIAL_STATE = {
    cartItems: []
}

export const cartReducer = (state = CARRT_INITIAL_STATE, action) => {
	const item  = action.payload;
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            // const item  = action.payload;

            const isItemExist = state.cartItems.find((existingItem) => existingItem.id === item.id)
			console.log('cart reducer: state:', state, 'item:', item, 'isitemexist:', isItemExist);
            if (isItemExist) {
                console.log('item found', item);
                return {
                    ...state, cartItems: state.cartItems.map((existingItem) => existingItem.id === item.id ? item : existingItem)
                }
            }

            else {
                console.log('cart reducer: added', item);
                return {
                    // ...state, cartItems: state.cartItems.push(item)
                    ...state, cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
			// const item  = action.payload;
            console.log('cart reducer: removed', item);
            return {
                ...state, cartItems: state.cartItems.filter((existingItem) => existingItem.id !== item)
            }
        default:
            return state
    }
}