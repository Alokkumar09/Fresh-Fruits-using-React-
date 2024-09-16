import React from "react";
import banner from '../../assest/fruit1.jpg'
import banner3 from '../../assest/footer-bg.jpg'
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/Animation";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
       
        {/* brand info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}

            className="text-3xl lg:text-5xl font-bold uppercase">Brand Info</motion.h1>
            < motion.p
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >
              What is a fruit? In a botanical sense, a fruit is the fleshy or
              dry ripened ovary of a flowering plant, enclosing the seed or
              seeds. Apricots, bananas, and grapes, as well as bean pods, corn
              grains, tomatoes, cucumbers, and in their shells acorns and
              almonds, are all technically fruits.
            </motion.p>
            <motion.p
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >
              Fruits are the ripened ovary of a flower, and they contain seeds.
              They are the final step in the sexual reproduction of flowering
              plants, and they help disperse seeds. Fruits can be fleshy or dry,
              and they come in a variety of colors, shapes, and flavors.
            </motion.p>
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Download App</button>
            </motion.div>
          </div>
        </div>
         {/* brand image */}
         <motion.div 
         initial={{opacity:0, x:200,rotate:75}}
         animate={{opacity:1,x:0,rotate:0}}
         transition={{duration:1,delay:0.2}}
         className="flex justify-center items-center">
          <img
            src={banner}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover rounded-2xl drop-shadow"
          />
        </motion.div>
      </div>
      {/* Banner3 */}
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
       
       {/* brand info */}
       <div className="flex flex-col justify-center">
         <motion.div
         initial={{opacity:0, x:200,rotate:75}}
         animate={{opacity:1,x:0,rotate:0}}
         transition={{duration:1,delay:0.2}}
         
         className="text-center  md:text-left space-y-4 lg:w-[100%]">
           <img src={banner3} alt="" />
           
           <motion.div
             variants={FadeUp(1.5)}
             initial="hidden"
             animate="visible"
             className="flex justify-center md:justify-start"
           >
             <button className="primary-btn">Download App</button>
           </motion.div>
         </motion.div>
       </div>
        
     </div>
    </section>
  );
};

export default Banner2;
