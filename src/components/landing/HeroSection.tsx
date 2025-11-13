'use client';

import { Button } from '../ui';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const colors = useThemeColors();
  return (
    <section className='relative overflow-hidden pt-20'>
      <div className='absolute inset-0 bg-linear-to-r from-primary-900/20 to-secondary-900/20'></div>
      <div className='relative z-10 flex flex-col lg:flex-row min-h-screen items-center justify-center px-4 gap-8'>
        <div className='text-center lg:text-left max-w-4xl lg:max-w-2xl mx-auto lg:mx-0'>
           <motion.h1
             className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-terracotta to-sage bg-clip-text text-transparent mb-6'
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             Where Moments Become Memories
           </motion.h1>
           <motion.p
             className='text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed'
             style={{ color: colors['text-secondary'] }}
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
             SDesignLocal transforms visions into unforgettable experiences — from intimate gatherings to large-scale celebrations across your region.
           </motion.p>
           <motion.div
             className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
           >
             <Button size='lg' className='px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-terracotta hover:bg-terracotta/90 text-cream'>
               Book a Consultation
             </Button>
             <Button
               variant='outlined'
               size='lg'
               className='px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-terracotta text-terracotta hover:bg-terracotta hover:text-cream'
             >
               Explore Our Events
             </Button>
           </motion.div>
         </div>
        <motion.div
          className='shrink-0'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src='/assets/images/hero-image.jpg'
            alt='Event Management Platform'
            width={400}
            height={300}
            className='rounded-lg shadow-2xl'
          />
        </motion.div>
      </div>
      {/* Floating elements for futuristic effect */}
      <div className='absolute top-20 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary-500/10 rounded-full blur-xl animate-bounce'></div>
      <div className='absolute bottom-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-secondary-500/10 rounded-full blur-2xl animate-pulse'></div>
    </section>
  );
};

export default HeroSection;
