'use client';
import useTheme from '@/app/hooks/theme';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ToggleDarkMode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className='dark:text-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-100 p-3 text-lg text-zinc-600 dark:bg-zinc-800'
      onClick={() => toggleTheme()}
    >
      {theme === 'dark' ? (
        <motion.div
          key='sun'
          initial={{ rotate: 90, scale: 0.5 }} // Initial sun rotation and scale
          animate={{ rotate: 0, scale: 1 }} // Animate to normal size and rotation
          exit={{ rotate: 90, scale: 0.5 }} // Exit animation when toggling to moon
          transition={{ duration: 0.5 }}
        >
          <Sun />
        </motion.div>
      ) : (
        <motion.div
          key='moon'
          initial={{ rotate: -90, scale: 0.5 }} // Initial moon rotation and scale
          animate={{ rotate: 0, scale: 1 }} // Animate to normal size and rotation
          exit={{ rotate: -90, scale: 0.5 }} // Exit animation when toggling to sun
          transition={{ duration: 0.5 }}
        >
          <Moon />
        </motion.div>
      )}
    </div>
  );
};

export default ToggleDarkMode;
