import axios from 'axios'
import * as actionTypes from '../constants/cartConstants'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
	// const { data } = await axios.get(`https://dummyjson.com/products/${productId}`)
	const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`)
	console.log('cart actions: before add to cart dispatch',data)

	dispatch({
		type: actionTypes.ADD_TO_CART,
		payload: {
			_id: data._id,
			name: data.name,
			imageUrl: data.imageUrl,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		}
	})
	console.log('cart actions: after add to cart dispatch', getState().cart.cartItems);
	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id
	})

	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}