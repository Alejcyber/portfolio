import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { myphoto } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy <span className='text-[#915EFF]'>Alejandro</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Yo desarrollo Backend en Java(Spring Boot)<br className='sm:block hidden' />
            y Frontend en Angular
          </p>
          <br />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Responsabilidad, compromiso y puntualidad son
            mis valores, desarrollador con más de 8+ años de
            experiencia, me encantan los retos y aprender
            nuevas tecnologías.
          </p>
      
          <img
            src={myphoto}
            alt='project_image'
            className='my-8 object-contain h-50 w-96 rounded-2xl'
          />
         
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
