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
        <nav className='relative flex gap-10 text-gray-500 dark:text-gray-300'>
          {nav.map((item) => {
            const isActive = item.link === activeLink;
            return (
              <Link
                key={item.name}
                href={item.link}
                data-link={item.link}
                className={clsx(
                  'hover:text-primary relative transition duration-200',
                  isActive && 'text-primary'
                )}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Render underline */}
          <motion.div
            className='bg-primary absolute bottom-0 h-0.5'
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
          <ToggleDarkMode />
        </div>
      </motion.header>

      {/* For Mobile Devices */}
      <div className='fixed top-0 left-0 z-50 m-5 cursor-pointer text-xl md:hidden'>
        <div
          className='dark:text-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-100 p-3 text-lg text-zinc-600 dark:bg-zinc-800'
          onClick={() => handleDrawer(true)}
        >
          <i className='fa fa-bars'></i>
        </div>
      </div>
      <div className='fixed top-0 right-0 z-50 m-5 cursor-pointer text-xl md:hidden'>
        <ToggleDarkMode />
      </div>
      <motion.header className='text-foreground flex justify-end md:hidden'>
        <AnimatePresence>
          {drawerState && (
            <motion.nav
              className={
                'fixed top-0 right-0 z-50 grid h-full w-full grid-cols-2 gap-5 p-5 text-xl backdrop-blur'
              }
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
                className='col-span-2 flex cursor-pointer items-center justify-center rounded border bg-[#ffffffb0] select-none dark:bg-[#191919b0]'
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
                  <Link
                    key={item.name}
                    href={item.link}
                    data-link={item.link}
                    className={clsx(
                      'hover:text-primary relative transition duration-200',
                      isActive && 'text-white'
                    )}
                  >
                    <motion.div
                      className={clsx(
                        'flex h-full w-full items-center justify-center rounded border bg-[#ffffffb0] dark:bg-[#191919b0]',
                        isActive &&
                          'bg-[rgba(var(--primary),0.8)] dark:bg-[rgba(var(--primary),0.5)]'
                      )}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1, duration: 0.4 },
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
