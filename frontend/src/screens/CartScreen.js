import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from '../components/CartItem'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

const CartScreen = () => {
	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart
	const dispatch = useDispatch()

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty))
	}

	const removeHandler = (id) => {
		dispatch(removeFromCart(id))
	}

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
	}

	const getCartSubtotal = () => {
		return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2)
	}

	return (
		<>
			<div className="cartscreen">
				<div className="cartscreen__left">
					<h2> Shopping Cart </h2>

					{cartItems.length === 0 ? 
						<div> 
							Your Cart is Empty.
							<Link to='/'> Go Back </Link>
						</div> 
						:
						cartItems.map((item) => 
							<CartItem 
								key={item._id} 
								item={item}
								qtyChangeHandler={qtyChangeHandler}
								removeHandler={removeHandler}
							/>
						)
					}
				</div>

				<div className='cartscreen__right'>
					<div className='cartscreen__info'>
						<p> Subtotal {getCartCount()} items </p>
						<p> ${getCartSubtotal()} </p>
					</div>
					<div>
						<button> Proceed To Checkout </button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartScreen