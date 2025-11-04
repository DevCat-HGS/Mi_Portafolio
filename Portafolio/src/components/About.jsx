import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Sobre Mi.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Soy un desarrollador de software habilidoso con experiencia en  Typescript, JavaScript, python y
        c++, tengo experiencia manejando frameworks como React, Node.js, y
        express. Soy un aprendiz rápido y colaboro estrechamente con clientes y compañeros de trabajo para
        crear soluciones eficientes, escalables, y amigables con el usuario que resuelven
        problemas del mundo real. ¡Vamos a trabajar juntos para dar vida a tus ideas!
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-4 justify-center'>
        <a
          href="/src/assets/hoja-de-vida.pdf"
          download="Harold_Salgado_CV.pdf"
          className='px-6 py-3 bg-tertiary rounded-full border-2 border-blue-500 text-white font-medium hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 flex items-center gap-2'
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar CV
        </a>
        
        <a
          href="mailto:haroldguerrerosena@gmail.com"
          className='px-6 py-3 bg-tertiary rounded-full border-2 border-blue-500 text-white font-medium hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 flex items-center gap-2'
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          haroldguerrerosena@gmail.com
        </a>
        <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </div>
 
         
    </>
  );
};

export default SectionWrapper(About, "about");
