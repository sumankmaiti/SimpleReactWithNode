import axios from 'axios'
import * as actionTypes from "../constants/productConstants"

export const fetchProducts = () => async (dispatch) => {
	// try {
	// 	dispatch({
	// 		type: actionTypes.GET_PRODUCTS_REQUEST
	// 	})
	// 	const { data } = await axios.get('/api/products')
	// 	dispatch({
	// 		type: actionTypes.GET_PRODUCTS_SUCCESS, 
	// 		payload: data
	// 	})
	// } catch (error) {
	// 	dispatch({
	// 		type: actionTypes.GET_PRODUCTS_FAIL, 
	// 		payload: error.response && error.response.data.message 
	// 			? error.response.data.message 
	// 		 	: error.message
	// 	})
	// }

	// 2nd technique
	dispatch({
		type: actionTypes.GET_PRODUCTS_REQUEST
	})
	axios.get('https://fakestoreapi.com/products')
	.then((response) => {
		return {
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: response.data
		}
	})
	.catch((response) => {
		return {
			type: actionTypes.GET_PRODUCTS_FAIL,
			payload: response
		}
	})
}
