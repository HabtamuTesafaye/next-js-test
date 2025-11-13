'use client';

import { motion } from 'framer-motion';
import { useThemeColors } from '@/contexts/ThemeContext';

const stats = [
  { label: 'Events Planned', value: '500+', icon: '🎉' },
  { label: 'Client Retention', value: '98%', icon: '💝' },
  { label: 'Years of Excellence', value: '10+', icon: '⭐' },
  { label: 'Local Partners', value: '150+', icon: '🤝' },
];

const StatsSection = () => {
  const colors = useThemeColors();

  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16'
          style={{ color: colors['text-primary'] }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          EventFlow by the Numbers
        </motion.h2>
        <motion.div
          className='grid grid-cols-2 lg:grid-cols-4 gap-8'
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.6 }}
              className='text-center p-6 rounded-lg'
              style={{
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
              }}
            >
              <div className='text-4xl mb-4'>{stat.icon}</div>
              <div
                className='text-3xl font-bold mb-2'
                style={{ color: colors.primary }}
              >
                {stat.value}
              </div>
              <div
                className='text-sm font-medium'
                style={{ color: colors['text-secondary'] }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;