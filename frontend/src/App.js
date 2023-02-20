import './App.css';

import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

function App() {
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <BrowserRouter>
      <Navbar click={() => setSideToggle(true) } />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
    </BrowserRouter>
  )
}

export default App;
