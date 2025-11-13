'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useThemeColors } from '@/contexts/ThemeContext';

const faqs = [
  {
    question: 'How do I get started with EventFlow?',
    answer: 'Simply sign up for a free account and start creating your first event. Our intuitive dashboard guides you through the process.',
  },
  {
    question: 'What features are included in the free plan?',
    answer: 'The free plan includes basic event creation, guest management, and email invitations. Premium features are available in paid plans.',
  },
  {
    question: 'Can I integrate EventFlow with other tools?',
    answer: 'Yes, EventFlow supports integrations with popular calendar apps, email services, and social media platforms.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard encryption and security measures to protect your data and ensure privacy.',
  },
];

const FAQSection = () => {
  const colors = useThemeColors();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <motion.h2
          className='text-4xl font-bold text-center mb-16'
          style={{ color: colors['text-primary'] }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          className='space-y-4'
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
              className='border rounded-lg overflow-hidden cursor-pointer'
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div className='p-6 flex justify-between items-center'>
                <h3 style={{ color: colors['text-primary'] }} className='text-lg font-semibold'>
                  {faq.question}
                </h3>
                <span style={{ color: colors.accent }} className='text-2xl'>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='px-6 pb-6'
                >
                  <p style={{ color: colors['text-secondary'] }}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;