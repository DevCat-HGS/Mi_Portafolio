import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, logo } from '../assets';
import { hojaDeVida } from '../assets';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Preview = ({ onContinue }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simular carga de componentes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 segundos de carga simulada
    
    return () => clearTimeout(timer);
  }, []);
  
  // Usamos el logo como imagen de perfil
  const profileImg = logo;
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary w-screen h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-cuarto"
      >
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-full h-full object-cover" 
        />
      </motion.div>
      
      <motion.div 
        className="flex space-x-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="https://github.com/DevCat-HGS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors"
        >
          <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/harold-salgado-498a60354/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors"
        >
          <FaLinkedin className="text-xl sm:text-2xl md:text-3xl" />
        </a>
        <a
          href={hojaDeVida}
          download="Harold_Salgado_CV.pdf"
          className="text-white hover:text-secondary transition-colors"
        >
          <FaFileDownload className="text-xl sm:text-2xl md:text-3xl" />
        </a>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-6 mb-2"
      >
        Bienvenido a mi Portafolio
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-white-100 text-center mb-6 text-sm sm:text-base"
      >
        Cargando experiencia interactiva...
      </motion.p>
      
      <motion.div
        className="w-64 sm:w-80 h-2 bg-black-200 rounded-full overflow-hidden mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-cuarto"
          initial={{ width: "0%" }}
          animate={{ width: isLoading ? "90%" : "100%" }}
          transition={{ duration: 2.5 }}
        />
      </motion.div>
      
      <motion.button
        onClick={onContinue}
        className="py-2 px-6 sm:py-3 sm:px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary bg-cuarto hover:bg-cuarto-dark text-sm sm:text-base transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isLoading ? "Cargando..." : "Continuar"}
      </motion.button>
    </div>
  );
};

export default Preview;