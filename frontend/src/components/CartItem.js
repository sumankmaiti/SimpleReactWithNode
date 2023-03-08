import { Link } from 'react-router-dom'
import './CartItem.css'
import "font-awesome/css/font-awesome.min.css"

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
	return (
		<div className='cartitem'>
			<div className='cartitem__image'>
				<img src={item.imageUrl[0]} alt={item.title} />
			</div>
			<Link to={`/product/${item.id}`} className='cartItem__name'>
				<p> { item.title } </p>
			</Link>
			<p className='cartitem__price'> ${item.price} </p>
			<select 
				value={item.qty}
				className='cartItem__select'
				onChange={(e) => qtyChangeHandler(item.id, e.target.value)}
				>
					{[...Array(item.stock).keys()].map((item) => {
						return <option key={item + 1} value={item + 1}> {item + 1} </option>
					})}	
			</select>
			<button className='cartItem__deleteBtn' onClick={() => removeHandler(item.id)}>
				<i className='fa fa-trash' aria-hidden="true"></i>
			</button>
		</div>
	)
}

export default CartItem