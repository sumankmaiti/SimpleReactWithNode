import axios from 'axios'
import * as actionTypes from "../constants/productConstants"

export const fetchProducts = () => (dispatch) => {
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
	// axios.get('https://dummyjson.com/products')
	.then((response) => {
		console.log(response.data);
		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: response.data
		})
	})
	.catch((response) => {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			payload: response
		})
	})
}
