import React from 'react'

import { motion,AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
  {
    open && (
      <motion.div 
      initial={{opacity: 0 ,y:-100}}
      animate={{opacity:1 ,y:0}}
      exit={{opacity:0 , y:-100}}
      transition={{duration:0.4}}
      className='absolute top-20 left-0 w-full h-screen z-20 '>
        <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
          <ul className='flex flex-col items-center gap-10 cursor-pointer'>
          <Link className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold' to={'/'} ><li className='text-xl '>Home</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold' to={'/product'}><li className='text-xl'>Products</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold' to={'/about'}><li className='text-xl'>About</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-yellow-200  font-semibold' to={'/shop'}><li className='text-xl'>Shop</li></Link>
                <Link className='inline-block py-1 px-3 hover:text-yellow-200 font-semibold' to={'/contact'}><li className='text-xl'>Contact</li></Link>
          
          </ul>
        </div>
      </motion.div>
    )
  }
    </AnimatePresence>
  )
}

export default ResponsiveMenu