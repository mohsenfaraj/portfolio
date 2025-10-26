import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
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

  return { theme, toggleTheme };
}
