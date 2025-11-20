'use client';
import { motion } from 'framer-motion';
import { topToBottom } from '@/app/ui/Animations';
import { card } from '../lib/loadAbout';
import Icon from './components/Icon';

type Props = { cards: card[] };

const About = ({ cards }: Props) => {
  return (
    <section id='about'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-primary text-center text-4xl font-bold'
          variants={topToBottom}
          initial='hidden'
          animate='show'
          transition={{ delay: 0.3 }}
        >
          [About]
        </motion.h2>
        <motion.p
          className='text-foreground mt-3 text-center'
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
                {
                  <div
                    className={
                      'absolute top-1/2 left-8 z-0 -translate-y-1/2 text-zinc-200 dark:text-[#353535]'
                    }
                  >
                    <Icon name={card.icon} size={100} />
                  </div>
                }
                <div className='relative z-20'>
                  <h3 className='from-primary to-secondary inline-block items-center gap-2 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent shadow-black'>
                    {card.title}
                  </h3>
                  <p className='text-foreground mt-2 leading-7'>{card.body}</p>
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
