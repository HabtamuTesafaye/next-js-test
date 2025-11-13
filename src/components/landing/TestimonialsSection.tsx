'use client';

import { motion } from 'framer-motion';
import { useThemeColors } from '@/contexts/ThemeContext';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Event Organizer',
    content: 'EventFlow has revolutionized how I manage events. The platform is intuitive and powerful.',
    avatar: '/assets/images/avatar1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Community Manager',
    content: 'Seamless event planning with great analytics. Highly recommend!',
    avatar: '/assets/images/avatar2.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Festival Coordinator',
    content: 'The best tool for large-scale events. Saves time and reduces stress.',
    avatar: '/assets/images/avatar3.jpg',
  },
];

const TestimonialsSection = () => {
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
          What Our Users Say
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className='p-6 rounded-lg shadow-lg'
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                border: `1px solid ${colors.border}`,
              }}
            >
              <p style={{ color: colors['text-secondary'] }} className='mb-4'>
                "{testimonial.content}"
              </p>
              <div className='flex items-center'>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className='w-10 h-10 rounded-full mr-3'
                />
                <div>
                  <p style={{ color: colors['text-primary'] }} className='font-semibold'>
                    {testimonial.name}
                  </p>
                  <p style={{ color: colors['text-muted'] }} className='text-sm'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;