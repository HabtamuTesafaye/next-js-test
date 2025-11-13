'use client';

import { motion } from 'framer-motion';
import { useThemeColors } from '@/contexts/ThemeContext';

const team = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    bio: 'Passionate about connecting communities through innovative event solutions.',
    avatar: '/assets/images/team1.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    bio: 'Tech enthusiast driving the development of cutting-edge event management tools.',
    avatar: '/assets/images/team2.jpg',
  },
  {
    name: 'Carol Davis',
    role: 'Head of Design',
    bio: 'Creative mind behind the intuitive and beautiful user experiences.',
    avatar: '/assets/images/team3.jpg',
  },
];

const TeamSection = () => {
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
          Meet Our Team
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
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className='text-center p-6 rounded-lg shadow-lg'
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                border: `1px solid ${colors.border}`,
              }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h3 style={{ color: colors['text-primary'] }} className='text-xl font-semibold mb-2'>
                {member.name}
              </h3>
              <p style={{ color: colors.accent }} className='text-sm mb-4'>
                {member.role}
              </p>
              <p style={{ color: colors['text-secondary'] }}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;