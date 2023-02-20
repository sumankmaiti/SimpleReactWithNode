import './App.css';

import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

//screens
import HomeScreen from "./screens/HomeScreen"

function App() {
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <BrowserRouter>
      <Navbar click={() => setSideToggle(true) } />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
	  <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
	  <main className='app'>
		<Switch>
			<Route exact path='/' component={HomeScreen} />
		</Switch>
	  </main>
    </BrowserRouter>
  )
}

export default App;
