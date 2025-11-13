'use client';

import { Button } from '../ui';
import { useThemeColors } from '@/contexts/ThemeContext';

const CTASection = () => {
  const colors = useThemeColors();
  return (
    <section
      className='py-16 sm:py-20 px-4'
      style={{
        background: `linear-gradient(to right, ${colors.surface}, ${colors['surface-secondary']})`
      }}
    >
      <div className='max-w-4xl mx-auto text-center'>
        <h2
          className='text-3xl sm:text-4xl font-bold mb-6'
          style={{ color: colors['text-primary'] }}
        >
          Founded with Passion. Driven by Purpose.
        </h2>
        <p
          className='text-lg sm:text-xl mb-8 leading-relaxed'
          style={{ color: colors['text-secondary'] }}
        >
          SDesignLocal was born in 2015 after our founder watched a friend struggle to plan her dream wedding — overwhelmed by impersonal vendors and generic templates. We set out to change that. Today, we're more than planners — we're storytellers, designers, and emotional architects. We believe every celebration deserves soul, intention, and flawless execution. That's why we work with local artisans, prioritize sustainability, and treat every client like family.
        </p>
        <Button size='lg' className='px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg'>
          Start Free Trial
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
