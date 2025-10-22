'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { popIn } from './Animations';
type timeLine = {
  title: string;
  date: string;
  body: string;
};
type Props = {
  timeline: timeLine[];
};

const Timeline = ({ timeline }: Props) => {
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      {timeline.map((time, index) => {
        if (time)
          return (
            <motion.li
              key={index}
              className='mb-10 ms-4'
              variants={popIn}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
            >
              <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700'></div>
              <time className='mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500'>
                {time.date}
              </time>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
                {time.title}
              </h3>
              <p className='text-lg font-normal text-gray-500 dark:text-gray-400'>
                {time.body}
              </p>
            </motion.li>
          );
      })}
    </ol>
  );
};

export default Timeline;
