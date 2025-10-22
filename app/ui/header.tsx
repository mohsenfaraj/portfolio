'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ToggleDarkMode from './components/ToggleDarkMode';
import { navlink } from '../lib/loadNav';

type Props = { nav: navlink[] };

export default function Header({ nav }: Props) {
  const pathname = usePathname();
  const [drawerState, setDrawerState] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeLink, setActiveLink] = useState(pathname);
  const [underlinePos, setUnderlinePos] = useState({ left: 0, width: 0 });

  useEffect(() => {
    handleDrawer(false);
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    const activeLinkElement = document.querySelector(
      `[data-link='${activeLink}']`
    );
    const navElement = document.querySelector('nav');

    if (activeLinkElement && navElement) {
      const { left: linkLeft, width } =
        activeLinkElement.getBoundingClientRect();
      const { left: navLeft } = navElement.getBoundingClientRect();

      setUnderlinePos({
        left: linkLeft - navLeft,
        width,
      });
    }
  }, [activeLink]);

  function handleDrawer(state: boolean) {
    setDrawerState(state);
  }

  const poping = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      duration: 0.5,
    },
  };

  return (
    <>
      <motion.header
        variants={poping}
        initial='hidden'
        animate='show'
        className='mx-auto hidden min-h-24 max-w-5xl items-center justify-between overflow-hidden md:flex'
      >
        <nav className='relative flex gap-10 text-gray-500'>
          {nav.map((item) => {
            const isActive = item.link === activeLink;
            return (
              <Link
                key={item.name}
                href={item.link}
                data-link={item.link}
                className={clsx(
                  'relative transition duration-200 hover:text-primary',
                  isActive && 'text-primary'
                )}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Render underline */}
          <motion.div
            className='absolute bottom-0 h-[2px] bg-primary'
            animate={{
              left: underlinePos.left,
              width: underlinePos.width,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{ position: 'absolute' }}
          />
        </nav>
        <div>
          <ToggleDarkMode theme={theme} setTheme={setTheme} />
        </div>
      </motion.header>

      {/* For Mobile Devices */}
      <div className='fixed right-0 top-0 z-50 m-5 cursor-pointer text-xl md:hidden'>
        <div
          className='rounded-full bg-zinc-100 p-3 dark:bg-zinc-800'
          onClick={() => handleDrawer(true)}
        >
          <i className='fa fa-bars'></i>
        </div>
      </div>
      <div className='fixed left-0 top-0 z-50 m-5 cursor-pointer text-xl md:hidden'>
        <ToggleDarkMode theme={theme} setTheme={setTheme} />
      </div>
      <motion.header className='flex justify-end text-foreground md:hidden'>
        <AnimatePresence>
          {drawerState && (
            <motion.nav
              className={clsx(
                'fixed right-0 top-0 h-full w-full gap-10 bg-[#ffffff88] backdrop-blur dark:bg-[#00000088]',
                'z-50 flex flex-col items-center justify-center'
              )}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)',
                transition: { duration: 0.5 },
              }}
            >
              <motion.span
                className='flex cursor-pointer items-center'
                onClick={() => handleDrawer(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <i className='fa fa-times'></i> &nbsp; close
              </motion.span>

              {nav.map((item, index) => {
                const isActive = item.link === activeLink;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1, duration: 0.4 },
                    }}
                    exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                  >
                    <Link
                      href={item.link}
                      data-link={item.link}
                      className={clsx(
                        'relative transition duration-200 hover:text-primary',
                        isActive && 'text-primary underline'
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
