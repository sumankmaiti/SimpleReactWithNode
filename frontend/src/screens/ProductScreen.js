import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate} from 'react-router-dom'

import './ProductScreen.css'
import {fetchProductDetails} from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'


const ProductScreen = () => {
	const [cart, setCart] = useState(1)
	const [pid, setPid] = useState(0)
	const dispatch = useDispatch()
	const param = useParams()
	const nevigate = useNavigate()
	
	if(pid !== param.id) {
		dispatch(fetchProductDetails(param.id))
		setPid(param.id)
	}

	const product = useSelector((state) => state.getProductDetails)
	const {loading, productDetails, error} = product
	console.log('product screen ',param.id, pid, cart, loading, productDetails, error);

	const addToCartHandler = () => {
		dispatch(addToCart(productDetails.id, cart))
		nevigate('/cart')
		// redirect('/cart')
		
	}

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
									<select value={cart} onChange={(e) => setCart(e.target.value)}>
										{[...Array(productDetails.stock).keys()].map((i) => {
											return <option key={i + 1} value={i + 1}>
												{i + 1}
											</option>
											}
										)}
									</select>
								</p>
								<p>
									<button type='button' onClick={addToCartHandler}>
										Add To Cart
									</button>
								</p>
							</div>
						</div>
					</>
			}
		</div>
	)
}

export default ProductScreen