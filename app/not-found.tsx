import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className='mt-32 flex flex-col justify-center text-center leading-10'>
      <h1 className='text-6xl font-black text-primary'>404 Not found</h1>
      <p>the page you are looking for doesn't exists.</p>
      <p>¯\_(ツ)_/¯</p>
    </div>
  );
};

export default NotFound;
