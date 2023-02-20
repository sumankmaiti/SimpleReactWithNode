import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reduceres
import { cartReducer } from './reducers/cartReducers'
import { getProductReducer, getProductDetailsReducer } from './reducers/productReducer'

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
})

const allMiddleaWares = [thunk]

const cartItemsInLocalStorage = localStorage.getItem('cart') 
    ? JSON.parse(localStorage.getItem('cart'))
    : []

const INITIAL_STATE = {
    cart: {
        cartItems: cartItemsInLocalStorage
    }
}

const store = createStore(
    reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...allMiddleaWares))
)

export default store