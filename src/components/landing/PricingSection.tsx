'use client';

import { motion } from 'framer-motion';
import { useThemeColors } from '@/contexts/ThemeContext';

const plans = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Create up to 3 events',
      'Basic event management',
      'Email invitations',
      'Attendee tracking',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    features: [
      'Unlimited events',
      'Advanced analytics',
      'Custom branding',
      'Priority support',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'Everything in Pro',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      '24/7 phone support',
    ],
    popular: false,
  },
];

const PricingSection = () => {
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
          Choose Your Plan
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
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
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className={`relative p-8 rounded-lg border-2 ${
                plan.popular ? 'border-primary-500 scale-105' : ''
              }`}
              style={{
                backgroundColor: colors.surface,
                borderColor: plan.popular ? colors.primary : colors.border,
              }}
            >
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <span
                    className='px-4 py-1 rounded-full text-sm font-semibold'
                    style={{
                      backgroundColor: colors.primary,
                      color: '#ffffff',
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className='text-center mb-8'>
                <h3
                  className='text-2xl font-bold mb-4'
                  style={{ color: colors['text-primary'] }}
                >
                  {plan.name}
                </h3>
                <div className='flex items-center justify-center'>
                  <span
                    className='text-4xl font-bold'
                    style={{ color: colors.primary }}
                  >
                    ${plan.price}
                  </span>
                  {plan.price > 0 && (
                    <span
                      className='text-lg ml-2'
                      style={{ color: colors['text-secondary'] }}
                    >
                      /month
                    </span>
                  )}
                </div>
              </div>

              <ul className='space-y-4 mb-8'>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center'>
                    <span
                      className='text-green-500 mr-3'
                      style={{ color: colors.accent }}
                    >
                      ✓
                    </span>
                    <span style={{ color: colors['text-secondary'] }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.popular ? 'hover:opacity-90' : ''
                }`}
                style={{
                  backgroundColor: plan.popular ? colors.primary : colors.secondary,
                  color: '#ffffff',
                }}
              >
                {plan.price === 0 ? 'Get Started' : 'Choose Plan'}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;