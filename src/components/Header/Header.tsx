'use client';

import { Button, NavMenu } from '../ui';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { MenuItems } from '../../../data';
import { SlArrowDown } from 'react-icons/sl';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='shadow-md py-4'>
      <div className='md:container md:mx-auto flex justify-between items-center px-4'>
        <div className='flex gap-4 items-center justify-start'>
          <Link
            className='sm:text-3xl text-base sm:font-bold font-normal text-secondary-100'
            href='/'
          >
            <Image src='/logo.png' alt='Refer App' width={125} height={36} />
          </Link>
          <Button classNames='text-secondary-200 bg-primary-100 flex items-center justify-center '>
            Resources <SlArrowDown className='ml-2 arrow-icon' />
          </Button>
        </div>
        <div className='flex items-center'>
          <button
            className='text-white text-2xl md:hidden'
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className='hidden md:flex items-center'>
            <NavMenu
              menus={MenuItems}
              navClassName='md:flex'
              ulClassName='flex flex-col md:flex-row'
              liClassName='my-2 md:my-0'
              linkClassName='text-lg md:text-base text-secondary-100 transition-colors font-medium duration-300 md:mx-4'
            />
          </div>
          <div className='flex gap-4'>
            <Link href='https://accredian.com/login'>
              <Button classNames='text-secondary-100 bg-primary-300/20 '>
                Login
              </Button>
            </Link>
            <Link href='https://trial.accredian.com/'>
              <Button classNames='text-secondary-200 bg-primary-100'>
                Try for free
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-center z-50'>
          <div className='bg-white rounded-lg p-4 m-4 relative w-64 shadow-lg'>
            <button
              className='text-black text-2xl absolute top-2 right-2'
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>
            <NavMenu
              menus={MenuItems}
              navClassName='block md:hidden'
              ulClassName='flex flex-col items-start'
              liClassName='my-2'
              linkClassName='text-black text-lg hover:text-gray-500 transition-colors duration-300'
            />
          </div>
        </div>
      )}
    </header>
  );
};
