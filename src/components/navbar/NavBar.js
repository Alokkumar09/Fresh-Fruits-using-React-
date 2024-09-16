import React, { useState } from 'react'
import { FaLeaf } from "react-icons/fa"; 
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart,MdMenu } from "react-icons/md";
import ResponsiveMenu from '../ResponsiveMenu';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [open,setOpen]=useState(false);
    
  return (
    <nav>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.5}}
        className='container flex justify-between items-center py-4 md:pt-4'>
            {/* logo section */}
            <div className='sticky  font-bold text-2xl flex gap-2 items-center uppercase'>
                <h2 className='text-primary '>Fresh <span className='text-secondary'> Fruits</span></h2>
                <FaLeaf className='text-green-400'/>
            </div>

            {/* Menu Section */} 
            <div className='hidden md:block'>

            <ul className='flex  gap-6 items-center text-gray-500'>
                <Link className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' to={'/Home'} ><li className='text-xl '>Home</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' to={'/product'}><li className='text-xl'>Products</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' to={'/about'}><li className='text-xl'>About</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' to={'/shop'}><li className='text-xl'>Shop</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' to={'/contact'}><li className='text-xl'>Contact</li></Link>
            <Link to={'/cart'}><button className='hover:bg-primary hover:text-white rounded-full duration-200 p-2'><MdOutlineShoppingCart className='text-3xl' /></button></Link>
            </ul>
            </div>
            {/* Mobile Menu  */}
            <div className='md:hidden' onClick={()=> setOpen(!open)} >
                <MdMenu className='text-4xl'/>
            </div>
        </motion.div>
            <ResponsiveMenu open={open}/>
    </nav>
  )
}

export default NavBar