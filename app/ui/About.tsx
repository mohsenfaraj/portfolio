'use client';
import React from 'react';
import { cards, iconClass } from '@/app/data/about';
import { motion } from 'framer-motion';
import { topToBottom } from '@/app/ui/Animations';
type Props = {};

const About = (props: Props) => {
  return (
    <section id='about'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-center text-4xl font-bold text-primary'
          variants={topToBottom}
          initial='hidden'
          animate='show'
          transition={{ delay: 0.3 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className='mt-3 text-center text-foreground'
          variants={topToBottom}
          initial='hidden'
          animate='show'
          transition={{ delay: 0.5 }}
        >
          My personal traits and things you should know about me
        </motion.p>
        <div className='mt-6 grid grid-cols-1 gap-8 overflow-hidden md:grid-cols-2'>
          {/* Personal Traits */}
          {cards.map((card, index) => {
            const isEven = index % 2 === 0;
            const animationDirection = isEven ? -100 : 100; // even from left (-100), odd from right (100)
            const delay = (index / 2) * 0.5 + 0.7;
            return (
              <motion.div
                key={card.title}
                className='relative space-y-4 rounded-lg p-6 shadow-lg dark:bg-[#1e1e1e]'
                initial={{ opacity: 0, x: animationDirection }}
                animate={{ opacity: 1, x: 0, transition: { delay: delay } }}
                transition={{
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                {<card.icon className={iconClass} />}
                <div className='relative z-20'>
                  <h3 className='inline-block items-center gap-2 bg-gradient-to-r from-[#e41700] to-[#e46400] bg-clip-text text-2xl font-semibold text-transparent shadow-black drop-shadow-md'>
                    {card.title}
                  </h3>
                  <p className='mt-2 leading-7 text-foreground shadow-black drop-shadow-md'>
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
