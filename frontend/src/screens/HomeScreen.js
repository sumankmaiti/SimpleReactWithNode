import './HomeScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

//Actions
import { fetchProducts } from '../redux/actions/productActions'

//components
import Product from '../components/Product'


const HomeScreen = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		console.log('home screen use effect');
		dispatch(fetchProducts())
	}, [dispatch])

	const getProducts = useSelector((state) => state.getProducts)
	const { loading, products, error } = getProducts
	console.log('Home screen', loading, products, error);

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
								key = {product._id}	
								name = {product.name}
								description = {product.description}
								price = {product.price}
								imageUrl = {product.imageUrl}
								productID = {product._id}
							/>
						))
				}
			</div>
		</div>
	)
}

export default HomeScreen