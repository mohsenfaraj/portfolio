'use client';
import { motion } from 'framer-motion';
import { topToBottom } from './Animations';
import { useState } from 'react';
import { skill } from '../lib/loadSkills';
import '@/app/css/devicon.min.css';
type Props = { skills: skill[] };

const Skills = ({ skills }: Props) => {
  const [animateCircles, setAnimateCircles] = useState(false);
  const circleRadius = 40;
  const circleCircumference = 2 * Math.PI * circleRadius;
  return (
    <motion.div
      className='mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-6'
      variants={topToBottom}
      initial='hidden'
      animate='show'
      transition={{ delay: 0.5 }}
      onAnimationComplete={() => setAnimateCircles(true)} // Trigger stroke animation after fade-in
    >
      {skills.map((skill, index) => (
        <div key={index} className='flex flex-col items-center'>
          <div className='relative'>
            <motion.svg className='h-24 w-24' viewBox='0 0 100 100'>
              <circle
                cx='50'
                cy='50'
                r={circleRadius}
                strokeWidth='10'
                stroke='var(--bars)'
                fill='none'
              />
              <motion.circle
                cx='50'
                cy='50'
                r={circleRadius}
                strokeWidth='10'
                stroke='url(#gradient)'
                fill='none'
                strokeDasharray={circleCircumference}
                strokeDashoffset={circleCircumference}
                strokeLinecap='round'
                initial={{ strokeDashoffset: circleCircumference }}
                animate={
                  animateCircles
                    ? {
                        strokeDashoffset:
                          circleCircumference -
                          (circleCircumference * skill.percentage) / 100,
                      }
                    : {}
                }
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                transform='rotate(-90 50 50)'
              />
              <defs>
                <linearGradient id='gradient' gradientTransform='rotate(90)'>
                  <stop offset='0%' stopColor='var(--primary)' />
                  <stop offset='100%' stopColor='var(--secondary)' />
                </linearGradient>
              </defs>
            </motion.svg>
            <div className='text-primary absolute inset-0 flex items-center justify-center text-3xl'>
              <i className={skill.icon}></i>
            </div>
          </div>
          <div className='mt-2 text-center'>
            <h4 className='from-primary to-secondary bg-linear-to-r bg-clip-text text-lg font-semibold text-transparent'>
              {skill.percentage}%
            </h4>
            <p className='text-sm text-gray-400'>{skill.name}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
