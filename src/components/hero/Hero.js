import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import fruit1 from '../../assest/fruit-plate.png'
import leaf from "../../assest/leaf.png"
import { motion } from 'framer-motion'
import { FadeRight } from '../../utility/Animation'
import { FadeLeft } from '../../utility/Animation'
import { FadeUp } from '../../utility/Animation'

const Hero = () => {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
            {/* Brand info */}
            <div className='flex flex-col justify-center py-14 md:py-0 relative '>
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <motion.h1
                variants={FadeRight(0.6)}
                initial="hidden"
                animate="visible"

                className='font-bold text-5xl lg:text-6xl leading-relaxed xl:leading-loose'>Healthy
                    <br/>
                    
                    Fresh <span className='
                    text-secondary font-bold'>Fruits </span>
                    </motion.h1>
                    <motion.p 
                     variants={FadeRight(0.8)}
                     initial="hidden"
                     animate="visible"
                    className='text-2xl tracking-wide'>Order now for fresh Healthy life</motion.p>
                <motion.p 
                 variants={FadeRight(1)}
                 initial="hidden"
                 animate="visible"
                className='text-gray-400'>order Healthy and yummy food 
                    for your family and friend
                    this food is fresh and good 
                    for health
                </motion.p>
                    {/* button  */}
                <motion.div
                variants={FadeRight(1)}
                initial="hidden"
                animate="visible"
                className='flex justify-center md:justify-start'>
                <button 
                 
                className='primary-btn flex items-center gap-2'>
                    <span>
                        <IoBagHandleOutline/>
                    </span>
                    Order Now</button>
                </motion.div>
                </div>
            </div>
           {/* Hero Image */}
           <div className='flex justify-center items-center'>
           <motion.img 
        
           initial={{opacity:0, x:200,rotate:75}}
           animate={{opacity:1,x:0,rotate:0}}
           transition={{duration:1,delay:0.2}}
           className='w-[350px] md:w-[550px] drop-shadow' src={fruit1} alt='' />
           </div>
           <div className='absolute top-11  md:top-15 right-1/2 blur-sm opacity-80 rotate-[25deg]'>
          <motion.img 
          variants={FadeUp(0.6)}
          initial="hidden"
          animate="visible"
          className='w-full md:max-w-[300px]' src={leaf} alt=''/>
            </div>
        </div>
    </section>
  )
}

export default Hero