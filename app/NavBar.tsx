import { Moon, Sun } from 'lucide-react';
import React from 'react';

const NavBar = () => {
  return (
    <div className='shadow-md'>
      <div className='max-w-screen-lg mx-auto'>
        <nav className='h-16 flex justify-between items-center'>
          <div className='text-xl font-semibold'>Where in the World?</div>
          <div className='flex gap-2 items-center'>
            <Moon size={20} />
            Dark Mode
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
