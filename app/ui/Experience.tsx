'use client';
import { motion } from 'framer-motion';
import Skills from './Skills';
import Timeline from './Timeline';
import { topToBottom } from './Animations';
import { skill } from '../lib/loadSkills';

type timeLine = {
  title: string;
  date: string;
  body: string;
};
type Props = {
  timeline: timeLine[];
  skills: skill[];
};

const Experience = ({ timeline, skills }: Props) => {
  return (
    <div>
      <motion.h2
        className='text-primary text-center text-4xl font-bold'
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.3 }}
      >
        [Skills]
      </motion.h2>
      <Skills skills={skills} />
      <motion.div
        variants={topToBottom}
        initial='hidden'
        animate='show'
        className='mt-10 flex flex-col items-center justify-center'
        transition={{ delay: 0.8 }}
      >
        <motion.h2 className='text-primary mb-5 text-center text-4xl font-bold'>
          [Time Line]
        </motion.h2>
        <div className='overflow-hidden px-2'>
          <Timeline timeline={timeline} />
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
