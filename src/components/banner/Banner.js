import React from "react";
import banner from "../../assest/b2.avif";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/Animation";

const Banner = () => {
  return (
    <section className="
    bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* brand image */}
        <div className="flex justify-center items-center">
          <img
            src={banner}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover rounded-2xl drop-shadow"
          />
        </div>
        {/* brand info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:mac-w-[400px]">
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
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
