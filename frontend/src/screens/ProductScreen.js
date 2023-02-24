import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation, useMatch } from 'react-router-dom'
import axios from 'axios'

import './ProductScreen.css'
import {fetchProductDetails} from '../redux/actions/productActions'
import * as actionTypes from "../redux/constants/productConstants"


const ProductScreen = () => {
	const [qty, setQty] = useState(1)
	const dispatch = useDispatch()
	const [st, setSt] = useState(0)
	console.log('product screen 1',st);
	const p = parseInt(useParams().id)

	
	if(p !== st) {
		setSt(p)
	}
	useEffect(() => {
		dispatch(fetchProductDetails(st))
		// setSt(p)
	},[st, dispatch])
	console.log('product screen 2',st);

	const getProductDetails = useSelector((state) => state.getProductDetails)
	const {loading, productDetails, error} = getProductDetails

	// setId(id)

	return (
		<div className='productscreen'>
			{loading
				? <h2> Loading... </h2>
				: error
					? <h2> {error} </h2>
					: 
					<>
						<div className='productscreen__left'>
							<div className='left__image'>
								<img src={productDetails.images[0]} alt={productDetails.title} />
							</div>
							<div className='left__info'>
								<p className='left__name'> {productDetails.title} </p>
								<p> Price: ${productDetails.price} </p>
								<p> Description: {productDetails.description} </p>
							</div>
						</div>
						<div className='productscreen__right'> 
							<div className='right__info'>
								<p> Price: <span> ${productDetails.price} </span> </p>
								<p> Status: <span> {productDetails.stock > 0 ? 'In Stock' : 'Out of stock'} </span> </p>
								<p> Quantity: 
									<select value={qty} onChange={(e) => setQty(e.target.value)}>
										{[...Array(productDetails.stock).keys()].map((i) => {
											return <option key={i + 1} value={i + 1}>
												{i + 1}
											</option>
											}
										)}
									</select>
								</p>
							</div>
						</div>
					</>
			}
		</div>
	)
}

export default ProductScreen