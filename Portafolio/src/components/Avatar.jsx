import React from 'react';
import { logo } from '../assets';
import { styles } from '../styles';

const Avatar = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <img 
        src={logo} 
        alt="Logo" 
        className="w-20 h-20 object-contain rounded-full border-2 border-secondary"
      />
    </div>
  );
};

export default Avatar;