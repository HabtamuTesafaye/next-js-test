'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { events } from '@/data/events';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const EventDetailPage = () => {
  const params = useParams();
  const { theme } = useTheme();
  const eventId = params.id as string;
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1
              className="text-2xl font-bold mb-4"
              style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
            >
              Event Not Found
            </h1>
            <Link
              href="/events"
              className="px-6 py-2 rounded-lg font-medium"
              style={{
                backgroundColor: theme === 'dark' ? '#3b82f6' : '#3b82f6',
                color: '#ffffff',
              }}
            >
              Back to Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 py-8"
        >
          {/* Back Button */}
          <Link
            href="/events"
            className="inline-flex items-center mb-6 text-sm font-medium hover:underline"
            style={{ color: theme === 'dark' ? '#3b82f6' : '#3b82f6' }}
          >
            ← Back to Events
          </Link>

          {/* Event Image */}
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: theme === 'dark' ? '#3b82f6' : '#3b82f6',
                  color: '#ffffff',
                }}
              >
                {event.category}
              </span>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
              >
                {event.title}
              </h1>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: theme === 'dark' ? '#d4d4d4' : '#666666' }}
              >
                {event.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: theme === 'dark' ? '#374151' : '#f3f4f6',
                      color: theme === 'dark' ? '#d4d4d4' : '#374151',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                  borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                }}
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                >
                  Event Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📅</span>
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                      >
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                      >
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    <p
                      style={{ color: theme === 'dark' ? '#d4d4d4' : '#374151' }}
                    >
                      {event.location}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <span className="text-2xl mr-3">👥</span>
                    <p
                      style={{ color: theme === 'dark' ? '#d4d4d4' : '#374151' }}
                    >
                      {event.attendees} attending
                    </p>
                  </div>

                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🏢</span>
                    <p
                      style={{ color: theme === 'dark' ? '#d4d4d4' : '#374151' }}
                    >
                      Organized by {event.organizer}
                    </p>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="mt-6 pt-6 border-t" style={{ borderColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                    >
                      {event.price === 0 ? 'Free' : `$${event.price}`}
                    </span>
                  </div>
                  <button
                    className="w-full py-3 px-4 rounded-lg font-medium transition-colors"
                    style={{
                      backgroundColor: theme === 'dark' ? '#3b82f6' : '#3b82f6',
                      color: '#ffffff',
                    }}
                  >
                    {event.price === 0 ? 'Register for Free' : 'Purchase Ticket'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailPage;