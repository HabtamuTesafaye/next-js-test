'use client';

import { Button } from '../ui';
import { useThemeColors } from '@/contexts/ThemeContext';

const ContactSection = () => {
  const colors = useThemeColors();
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2
          className='text-4xl font-bold mb-8'
          style={{ color: colors['text-primary'] }}
        >
          Contact Us
        </h2>
        <p
          className='text-lg mb-12'
          style={{ color: colors['text-secondary'] }}
        >
          Have questions? Get in touch with our team.
        </p>
        <form className='max-w-md mx-auto space-y-4'>
          <input
            type='email'
            placeholder='Your Email'
            className='w-full p-3 rounded-lg border'
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
              color: colors['text-primary']
            }}
          />
          <textarea
            placeholder='Your Message'
            rows={4}
            className='w-full p-3 rounded-lg border'
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
              color: colors['text-primary']
            }}
          />
          <Button type='submit' className='w-full'>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;