import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 rounded-sm focus:outline-none";
  
  const variants = {
    primary: "bg-electric-amber text-black hover:brightness-110 shadow-lg hover:shadow-electric-amber/20 px-6 py-3",
    secondary: "bg-white text-black hover:bg-gray-100 px-6 py-3",
    outline: "bg-transparent border-[1.5px] border-white text-white hover:bg-white hover:text-black px-6 py-3",
    text: "bg-transparent text-white hover:text-electric-amber p-0",
  };

  return (
    <motion.button
      whileHover={{ scale: variant === 'text' ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;
