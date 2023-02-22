import './App.css';

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

//screens
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from './screens/ProductScreen'
// import CartScreen from './screens/CartScreen'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  
  return (
    <BrowserRouter>
		<Navbar click={() => setSideToggle(true) } />
		<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
		<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
		<main className='app'>
			<Routes>
				<Route exact path='/' element={<HomeScreen />} />
				<Route exact path='/product/:id' element={<ProductScreen />} />
				{/* <Route exact path='/cart' component={CartScreen} /> */}
			</Routes>
		</main>
    </BrowserRouter>
  )
}

export default App;
