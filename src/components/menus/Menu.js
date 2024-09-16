import React from 'react'
import fruit1 from '../../assest/fruit/f1.png'
import fruit2 from '../../assest/fruit/f2.png'
import fruit3 from '../../assest/fruit/f3.png'
import fruit4 from '../../assest/fruit/f4.png'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/Animation'

const MenuData=[
  {
    id:1,
    title:"Apple",
    price: "$34",
    img:fruit1,
    delay:0.3
  },{
    id:2,
    title:"Mango",
    price: "$34",
  img:fruit2,
  delay:0.6
  },{
    id:3,
    title:"Banana",
    price: "$3",
    img:fruit3,
    delay:0.9
  },{
    id:4,
    title:"Grapes",
    price: "$4",
    img:fruit4,
    delay:1.2
  }
]

const Menu = () => {
  return (
    <section>
      <div className='container pt-12 pb-10'> 
        <motion.h1
        initial={{opacity:0, x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.3}}
        className='text-3xl font-bold  text-left pb-10 uppercase'>Our Menu</motion.h1>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10'>
          {MenuData.map((menu)=>(
            <motion.div
            variants={FadeLeft(menu.delay)}
            initial="hidden"
            whileInView={"visible"}
            whileHover={{scale:1.1}}
            className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
             <img className='w-[60px] mb-4 scale-110 transform-translate-y-6' src={menu.img} alt='' />
             <div>
              <h1 className='text-lg font-semibold'>{menu.title}</h1>
              <p className='text-lg font-semibold text-secondary'> {menu.price}</p>
             </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu