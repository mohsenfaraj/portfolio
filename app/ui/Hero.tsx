'use client';
import Image from 'next/image';
import Button from './components/button';
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

import { useEffect } from 'react';
import socials from '../data/socials';
import { motion } from 'framer-motion';
import { topToBottom, leftToRight, rightToLeft } from './Animations';
import Link from 'next/link';
import { CVLink, fullname, titles } from '../data/base';
type Props = {};

const Hero = (props: Props) => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: titles,
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <motion.div
      className='box md:iterm-start flex min-h-96 flex-col-reverse items-center md:mt-20 md:flex-row md:justify-center md:gap-40'
      exit={{ opacity: 0 }}
    >
      <motion.div
        variants={leftToRight}
        className='relative mt-10 flex flex-col justify-center text-2xl'
        initial='hidden'
        whileInView='show'
        exit={{ opacity: 0 }}
      >
        <span className='absolute left-[-30%] top-[-35%] z-0 min-h-96 min-w-96 bg-gradient-radial from-primary from-10% to-transparent to-75% p-10 opacity-10 blur filter'>
          {/* The Blur Effect */}
        </span>
        <div className='z-10 w-96 px-4 md:px-0'>
          <motion.p variants={topToBottom} className='text-xl text-gray-400'>
            Hello There! I'm
          </motion.p>
          <motion.p variants={topToBottom} className='mt-2 text-gray-500'>
            {fullname}
          </motion.p>
          <motion.h2
            variants={topToBottom}
            className='mt-6 text-center text-4xl font-bold text-primary md:text-5xl'
            id='typewriter'
          ></motion.h2>
          <motion.div
            variants={topToBottom}
            className='mt-12 flex justify-center gap-7 text-gray-400'
          >
            {socials.map((social) => {
              return (
                <a
                  href={social.link}
                  className='transition duration-200 hover:text-primary'
                  title={social.name}
                  target='_blank'
                  key={social.name}
                >
                  {<social.icon />}
                </a>
              );
            })}
          </motion.div>
          <motion.div
            variants={topToBottom}
            className='mt-8 flex justify-center gap-3 text-sm'
          >
            <Link href={CVLink}></Link>
            <Button type='gradient'>Download CV</Button>
            <Link href={'/contact'}>
              <Button type='outline'>Contact me</Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={rightToLeft}
        initial={'hidden'}
        whileInView={'show'}
      >
        <Image
          priority={true}
          src='/transparent.png'
          alt='profile picture'
          height={400}
          width={400}
          className='rounded-full border-primary grayscale filter'
        ></Image>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
