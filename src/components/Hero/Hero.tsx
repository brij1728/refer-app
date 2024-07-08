'use client';

import React, { useState } from 'react';

import { HeroNavItems } from '../../../data';
import Link from 'next/link';

export const Hero = () => {
  const [selected, setSelected] = useState('Refer');

  return (
    <div className='flex mx-auto justify-center items-center w-full px-4 mt-8'>
      <div className='bg-primary-100 bg-opacity-11 rounded-[38px] py-2 px-4 w-full max-w-4xl'>
        <nav className='flex flex-row justify-around text-secondary-100 font-normal text-[16px] sm:text-[25px]'>
          {HeroNavItems.map(item => (
            <Link href={item.href} key={item.name} passHref>
              <div
                className={`relative my-1 sm:my-0 cursor-pointer ${
                  selected === item.name
                    ? 'text-primary-100 font-normal pb-2'
                    : ''
                }`}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
                {selected === item.name && (
                  <span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-primary-100 text-lg'>
                    •
                  </span>
                )}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
