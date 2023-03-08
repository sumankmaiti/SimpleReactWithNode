import './Navbar.css'
import "font-awesome/css/font-awesome.min.css"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Navbar = ({ click }) => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
	console.log('nav bar ', cartItems);
    const getCartCount = () => {
        return cartItems.reduce((total, item) => Number(item.qty) + total, 0)
    }

    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <h2> Simple Shopping Cart </h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to='/cart' className="cart__link">
                        <i className="fa fa-shopping-cart"></i>
                        <span>
                            Cart <span className="cartlogo__badge"> {getCartCount()} </span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'> Shop </Link>
                </li>
            </ul>
            <div className="hamburger__menu" onClick={ click }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar