'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { topToBottom } from './Animations';
import Button from './components/button';
import clsx from 'clsx';

type projects = {
  name: string;
  short: string;
  image: string;
  link: string;
  tags: string[];
};

type Props = {
  categories: string[];
  projects: projects[];
};

const Projects = ({ categories, projects }: Props) => {
  const [filter, setFilter] = useState('all');

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring', // Use spring for bouncy effect
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
  };

  function handleFilterChange(newFilter: string) {
    setFilter(newFilter);
  }
  return (
    <div>
      <motion.h1
        className='text-center text-4xl font-bold text-primary'
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.3 }}
      >
        [Projects]
      </motion.h1>
      <motion.p
        className='mt-3 text-center'
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.5 }}
      >
        Some of the projects that I have done
      </motion.p>
      <motion.div
        className='mt-10 flex flex-wrap justify-center gap-3'
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.7 }}
      >
        {categories.map((category) => {
          return (
            <Button
              type={
                clsx(filter == category ? 'gradient' : 'outline') as
                  | 'gradient'
                  | 'outline'
              }
              onClick={() => handleFilterChange(category)}
              key={category}
            >
              {category}
            </Button>
          );
        })}
      </motion.div>

      <motion.div
        className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'
        transition={{ delay: 1 }}
        variants={topToBottom}
        initial={'hidden'}
        animate={'show'}
      >
        <AnimatePresence>
          {projects.map((item) => {
            if (!item.tags?.includes(filter) && filter !== 'all') return null;
            return (
              <motion.div
                key={item.name}
                className='flex flex-col rounded-2xl shadow-lg dark:bg-zinc-900'
                variants={cardVariants}
                initial={'hidden'}
                animate='visible'
                exit='exit'
                layout // Enable layout animations
              >
                <div className='flex h-48 items-center justify-center overflow-clip rounded-2xl bg-zinc-50 text-4xl dark:bg-zinc-800'>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={317}
                      height={317}
                      className='rounded-2xl'
                    />
                  )}
                  {!item.image && <i className='fa fa-image' />}
                </div>
                <div className='flex flex-grow flex-col overflow-hidden p-5'>
                  <h2 className='inline-flex items-center gap-2 text-xl font-bold text-primary'>
                    {item.name}
                  </h2>
                  <p className='my-5 overflow-hidden text-justify text-sm leading-relaxed'>
                    {item.short}
                  </p>
                  <div className='mb-3 mt-auto border-b py-1 text-primary dark:border-zinc-700'>
                    <a
                      href={item.link}
                      target='_blank'
                      className='flex items-center gap-1'
                    >
                      <i className='fa fa-link'></i> link
                    </a>
                  </div>
                  <div className='flex min-h-7 items-center gap-2'>
                    {item.tags?.map((tag) => {
                      return (
                        <span
                          className='rounded border border-zinc-500 bg-zinc-100 p-1 text-sm text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800'
                          key={tag}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
