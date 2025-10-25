'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ToggleDarkMode = ({ theme, setTheme }: Props) => {
  useEffect(() => {
    // Check stored preference on initial load
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute(
      'class',
      savedTheme === 'light' ? '' : 'dark'
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.setAttribute(
      'class',
      newTheme === 'light' ? '' : 'dark'
    );
    localStorage.setItem('theme', newTheme); // Save preference
  };

  return (
    <div
      className='dark:text-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-100 p-3 text-lg text-zinc-600 dark:bg-zinc-800'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <motion.div
          key='sun'
          initial={{ rotate: 90, scale: 0.5 }} // Initial sun rotation and scale
          animate={{ rotate: 0, scale: 1 }} // Animate to normal size and rotation
          exit={{ rotate: 90, scale: 0.5 }} // Exit animation when toggling to moon
          transition={{ duration: 0.5 }}
        >
          <i className='fa fa-sun-o'></i>
        </motion.div>
      ) : (
        <motion.div
          key='moon'
          initial={{ rotate: -90, scale: 0.5 }} // Initial moon rotation and scale
          animate={{ rotate: 0, scale: 1 }} // Animate to normal size and rotation
          exit={{ rotate: -90, scale: 0.5 }} // Exit animation when toggling to sun
          transition={{ duration: 0.5 }}
        >
          <i className='fa fa-moon-o'></i>
        </motion.div>
      )}
    </div>
  );
};

export default ToggleDarkMode;
