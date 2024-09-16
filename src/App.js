import React from 'react'
import NavBar from './components/navbar/NavBar'
import {Route,Routes} from 'react-router-dom';
import Hero from './components/hero/Hero';
import Menu from './components/menus/Menu'
import Home from './Home';



const App = () => {
  return (
    <div className='App relative' ><NavBar/>
      <Routes >
      <Route path='/' element={<Home/>} />
       <Route path='/Menu' element={<Menu/>} />
      </Routes>
      </div>
  )
}

export default App