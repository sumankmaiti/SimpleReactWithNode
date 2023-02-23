import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './ProductScreen.css'
import {fetchProductDetails} from '../redux/actions/productActions'

function usePrevious(value) {
	const ref = useRef(value);
	useEffect(() => {
	  ref.current = value;
	});
	return ref.current;
  }

const ProductScreen = () => {
	const [qty, setQty] = useState(1)
	const dispatch = useDispatch()
	const params = useParams()
	const [val, setVal] = useState(0);
	const prevVal = usePrevious(val);
	
	useEffect(() => {
		console.log('useeffect');
		if (prevVal !== params.id){
		dispatch(fetchProductDetails(params.id))}
		setVal(params.id)
	}, [dispatch, params, prevVal])

	const getProductDetails = useSelector((state) => state.getProductDetails)
	const {loading, productDetails, error} = getProductDetails

	console.log('mmmm', params.id);
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