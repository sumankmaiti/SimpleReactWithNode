import axios from 'axios'
import * as actionTypes from '../constants/cartConstants'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`https://dummyjson.com/products/${productId}`)
	console.log('cart actions',data)

	dispatch({
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: data.id,
			title: data.title,
			imageUrl: data.images,
			price: data.price,
			stock: data.stock,
			qty,
		}
	})
	console.log('cart actions', getState().cart.cartItems);
	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id
	})

	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}