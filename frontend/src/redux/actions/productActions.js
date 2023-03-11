import axios from 'axios'
import * as actionTypes from "../constants/productConstants"

export const fetchProducts = () => (dispatch) => {
	// try {
	// 	dispatch({
	// 		type: actionTypes.GET_PRODUCTS_REQUEST
	// 	})
	// 	const { data } = await axios.get('https://dummyjson.com/products')
	// 	dispatch({
	// 		type: actionTypes.GET_PRODUCTS_SUCCESS, 
	// 		payload: data.products
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
	// axios.get('https://fakestoreapi.com/products')
	// axios.get('https://dummyjson.com/products')
	axios.get('http://localhost:5000/api/products')
	.then((response) => {
		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			// payload: response.data.products
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


export const fetchProductDetails = (id) => (dispatch) => {
	dispatch({
		type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
	})

	// axios.get(`https://dummyjson.com/products/${id}`)
	axios.get(`http://localhost:5000/api/products/${id}`)
	.then((response) => {
		// console.log(response.data);
		dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: response.data})
	})
	.catch((response) => 
	dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: response}))
	// try {
	// 	dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
	
	// 	const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
	
	// 	dispatch({
	// 	  type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
	// 	  payload: data,
	// 	});
	//   } catch (error) {
	// 	dispatch({
	// 	  type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
	// 	  payload:
	// 		error.response && error.response.data.message
	// 		  ? error.response.data.message
	// 		  : error.message,
	// 	});
	//   }
	};