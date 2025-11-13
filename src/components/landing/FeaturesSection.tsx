'use client';

import { Card } from '../ui';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/contexts/ThemeContext';

const features = [
  {
    title: 'Tailored Design',
    description:
      'Every event is uniquely crafted — no templates, no cookie-cutter plans.',
    icon: 'mdi:palette',
  },
  {
    title: 'Local Expertise',
    description:
      'Deep connections with venues, vendors, and communities across your region.',
    icon: 'mdi:map-marker',
  },
  {
    title: 'Stress-Free Execution',
    description:
      'From concept to cleanup — we handle it all, so you enjoy every moment.',
    icon: 'mdi:heart',
  },
];

const FeaturesSection = () => {
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
          Why Choose Us?
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <Card
                title={
                  <div className='flex items-center gap-2'>
                    <Icon icon={feature.icon} className='text-2xl text-primary-500' />
                    <span>{feature.title}</span>
                  </div>
                }
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                }}
                className='border hover:border-primary-500 transition-colors'
              >
                <p style={{ color: colors['text-secondary'] }}>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
