import React from 'react'
import Hero from './components/hero/Hero'
import Menu from './components/menus/Menu'
import Banner from './components/banner/Banner'
import Banner2 from './components/banner/Banner2'
import Footer from './components/footer/Footer'

const Home = () => {
  return (
    <div >
      <Hero/>
      <Menu/>
      <Banner/>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default Home