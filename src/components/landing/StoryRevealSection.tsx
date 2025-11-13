'use client';

import { motion } from 'framer-motion';
import { useThemeColors } from '@/contexts/ThemeContext';

const StoryRevealSection = () => {
  const colors = useThemeColors();

  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-8'
        >
          <div className='inline-flex items-center space-x-2 px-4 py-2 bg-terracotta/20 rounded-full border border-terracotta/30 mb-6'>
            <span className='text-terracotta font-medium'>S.T.S.U. in T.Pouch</span>
          </div>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-6'
            style={{ color: colors['text-primary'] }}
          >
            A Quiet Promise, A Lasting Legacy
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='prose prose-lg mx-auto max-w-3xl'
          style={{ color: colors['text-secondary'] }}
        >
          <p className='text-lg leading-relaxed mb-6'>
            "S.T.S.U. in T.Pouch" — it stands for "Something To Show Up For." These words were whispered by our founder's grandmother on her deathbed, tucked into a small pouch along with a faded photograph and a single key.
          </p>
          <p className='text-lg leading-relaxed mb-6'>
            That pouch wasn't just an heirloom; it was a reminder that life is too short for ordinary moments. Every event we create carries this quiet promise — that we'll show up fully, love deeply, and leave nothing but joy in our wake.
          </p>
          <p className='text-lg leading-relaxed'>
            When you work with SDesignLocal, you're not just hiring a planner. You're joining a legacy of people who believe that every gathering, every celebration, deserves to be something truly worth showing up for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-12'
        >
          <div className='inline-block p-6 rounded-lg border-2 border-dashed'
               style={{ borderColor: colors.accent, backgroundColor: colors.accent + '10' }}>
            <p className='text-sm italic' style={{ color: colors['text-muted'] }}>
              "Life is too short for ordinary moments."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryRevealSection;