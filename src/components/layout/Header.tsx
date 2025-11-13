'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '../ui';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className='fixed top-0 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-50 border-b border-neutral-300 dark:border-neutral-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-3 sm:py-4'>
          <div className='flex items-center space-x-3'>
            <h1 className='text-xl sm:text-2xl font-bold bg-linear-to-r from-terracotta to-sage bg-clip-text text-transparent'>
              SDesignLocal
            </h1>
            <div className='px-2 py-1 bg-terracotta/20 rounded-full text-xs text-cream border border-terracotta/30 hover:bg-terracotta/30 transition-colors cursor-default'>
              S.T.S.U. in T.Pouch
            </div>
          </div>
          <nav className='hidden md:flex space-x-6 lg:space-x-8'>
            <Link
              href='/'
              className={`text-sm lg:text-base transition-colors ${
                pathname === '/'
                  ? 'text-terracotta font-semibold'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href='/featured'
              className={`text-sm lg:text-base transition-colors ${
                pathname === '/featured'
                  ? 'text-terracotta font-semibold'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Featured
            </Link>
            <Link
              href='/events'
              className={`text-sm lg:text-base transition-colors ${
                pathname === '/events'
                  ? 'text-terracotta font-semibold'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Events
            </Link>
            <Link
              href='/about'
              className={`text-sm lg:text-base transition-colors ${
                pathname === '/about'
                  ? 'text-terracotta font-semibold'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href='/contact'
              className={`text-sm lg:text-base transition-colors ${
                pathname === '/contact'
                  ? 'text-terracotta font-semibold'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className='flex space-x-2 sm:space-x-4'>
            <Button
              variant='outlined'
              size='small'
              onClick={toggleTheme}
              className='text-xs sm:text-sm'
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </Button>
            <Button variant='outlined' size='small' className='hidden sm:flex text-xs sm:text-sm'>
              Sign In
            </Button>
            <Button size='small' className='text-xs sm:text-sm border-terracotta text-terracotta hover:bg-terracotta hover:text-cream'>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
