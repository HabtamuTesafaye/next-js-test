'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Event } from '@/data/events';
import { useThemeColors } from '@/contexts/ThemeContext';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const colors = useThemeColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
      }}
    >
      <Link href={`/events/${event.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: colors.primary,
                color: '#ffffff',
              }}
            >
              {event.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: event.price === 0 ? colors.accent : colors.secondary,
                color: '#ffffff',
              }}
            >
              {event.price === 0 ? 'Free' : `$${event.price}`}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3
            className="text-xl font-bold mb-2 line-clamp-2"
            style={{ color: colors['text-primary'] }}
          >
            {event.title}
          </h3>
          <p
            className="text-sm mb-4 line-clamp-3"
            style={{ color: colors['text-secondary'] }}
          >
            {event.description}
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span style={{ color: colors.accent }}>📅</span>
                <span style={{ color: colors['text-secondary'] }} className="ml-1">
                  {new Date(event.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <span style={{ color: colors.accent }}>📍</span>
                <span style={{ color: colors['text-secondary'] }} className="ml-1">
                  {event.location}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <span style={{ color: colors['text-muted'] }} className="text-sm">
                👥 {event.attendees} attending
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {event.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    backgroundColor: colors['surface-secondary'],
                    color: colors['text-muted'],
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;