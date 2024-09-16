import React from 'react'
import {FaInstagram,FaFacebook,FaTwitter,FaLeaf} from "react-icons/fa"
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='bg-black py-8 mt-10'>
        <div className='container flex justify-between items-center'>
        {/* logo section */}
        <div className='sticky  font-bold text-2xl flex gap-2 items-center uppercase'>
                <h2 className='text-primary '>Fresh <span className='text-secondary'> Fruits</span></h2>
                <FaLeaf className='text-green-400'/>
            </div>
        {/* Social Section */}
        <div className='text-white flex justify-center items-center gap-6'>
           <FaFacebook className='text-2xl'/>
           <FaTwitter  className='text-2xl'/>
           <FaInstagram  className='text-2xl'/>  
        </div>
        </div>
    </footer>
  )
}

export default Footer