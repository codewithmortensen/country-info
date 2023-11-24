'use client';
import dynamic from 'next/dynamic';

import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Sun = dynamic(() => import('lucide-react').then((mod) => mod.Sun), {
  ssr: false,
});

const NavBar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className='shadow-md'>
      <div className='max-w-[450px] px-5 md:max-w-screen-lg mx-auto text-center'>
        <nav className='h-16 flex justify-between items-center'>
          <div className='text-lg sm:text-xl font-semibold'>
            Where in the World?
          </div>
          <Sun />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
