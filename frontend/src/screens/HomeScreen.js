import './HomeScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Actions
import { fetchProducts } from '../redux/actions/productActions'

//components
import Product from '../components/Product'


const HomeScreen = () => {
	const dispatch = useDispatch()
	let params = useParams()
	console.log('home screen', params);

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const getProducts = useSelector((state) => state.getProducts)
	const { loading, products, error } = getProducts

	return (
		<div className='homescreen'>
			<h2 className='homescreen__title'> Latest Products </h2>
			<div className='homescreen__products'>
				{ loading
					? <h2> Loading Products.... </h2>
				 	: error 
						? <h2> { error } </h2>
						: products.map((product) => (
						 	<Product 
								key = {product.id}	
								name = {product.title}
								description = {product.description}
								price = {product.price}
								imageUrl = {product.images[0]}
								productID = {product.id}
							/>
						))
				}
			</div>
		</div>
	)
}

export default HomeScreen