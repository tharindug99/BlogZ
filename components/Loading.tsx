import Image from 'next/image';
import React from 'react';
import animation from '../app/public/animations/Loading.gif';

function Loading() {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <Image src={animation} alt='loading animation' height={100} width={100} />
    </div>
  );
}

export default Loading;
