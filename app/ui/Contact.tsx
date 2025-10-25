'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { topToBottom } from '@/app/ui/Animations';
type Props = {
  contactAPI: string;
  email: string;
  telegram: string;
};

const Contact = ({ contactAPI, email, telegram }: Props) => {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = {
      name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement)
        .value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement)
        .value,
      message: (
        e.currentTarget.elements.namedItem('message') as HTMLInputElement
      ).value,
    };

    let isSuccess = false;

    try {
      setSending(true);

      const response = await fetch(contactAPI, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      isSuccess = true; // Mark success

      alert('Your message has been sent!');
    } catch (error) {
      alert('Failed to submit form: ' + error);
    } finally {
      setSending(false);
      if (isSuccess && formRef.current) {
        formRef.current.reset();
      }
    }
  }

  return (
    <div>
      <motion.h1
        className='text-primary text-center text-4xl font-bold'
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.3 }}
      >
        [Contact]
      </motion.h1>

      <motion.div
        className='my-5 flex flex-wrap items-center justify-center gap-2 text-center text-lg'
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.5 }}
      >
        <div className='flex items-center gap-2'>
          <i className='fa fa-envelope'></i>
          {email}
        </div>
        <div className='flex items-center gap-2'>
          <i className='fa fa-telegram'></i> {telegram}
        </div>
      </motion.div>

      <motion.p
        className='mt-10 text-center'
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.7 }}
      >
        or use this form below:
      </motion.p>

      <motion.form
        className='mx-auto mt-5 flex max-w-3xl flex-col gap-3'
        onSubmit={handleFormSubmit}
        ref={formRef}
        variants={topToBottom}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.9 }}
      >
        <input
          type='text'
          name='name'
          autoComplete='off'
          placeholder='Your name'
          required
          className='focus:border-primary rounded border border-zinc-500 bg-zinc-50 p-4 duration-200 outline-none dark:bg-zinc-900 dark:text-white'
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          className='focus:border-primary rounded border border-zinc-500 bg-zinc-50 p-4 duration-200 outline-none dark:bg-zinc-900 dark:text-white'
        />
        <textarea
          name='message'
          required
          cols={30}
          rows={8}
          placeholder='Message...'
          className='focus:border-primary rounded border border-zinc-500 bg-zinc-50 p-4 outline-none dark:bg-zinc-900 dark:text-white'
        ></textarea>
        <input
          type='submit'
          value={sending ? 'Sending...' : 'Submit'}
          className='hover:border-primary hover:text-primary focus:border-primary focus:text-primary cursor-pointer rounded border border-zinc-500 bg-zinc-50 p-4 font-bold outline-none disabled:opacity-50 dark:bg-zinc-900 dark:text-white'
          disabled={sending}
        />
      </motion.form>
    </div>
  );
};

export default Contact;
