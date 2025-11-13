'use client';

import { useState, useMemo } from 'react';
import { Header, Footer } from '@/components/layout';
import EventCard from '@/components/events/EventCard';
import EventFilters from '@/components/events/EventFilters';
import { events, Event } from '@/data/events';
import { useTheme } from '@/contexts/ThemeContext';

const EventsPage = () => {
  const { theme } = useTheme();
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    dateRange: '',
    location: '',
  });

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Category filter
      if (filters.category && event.category !== filters.category) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        switch (filters.priceRange) {
          case 'Free':
            if (event.price !== 0) return false;
            break;
          case '$0-$50':
            if (event.price < 0 || event.price > 50) return false;
            break;
          case '$50-$100':
            if (event.price < 50 || event.price > 100) return false;
            break;
          case '$100+':
            if (event.price < 100) return false;
            break;
        }
      }

      // Date range filter
      if (filters.dateRange) {
        const eventDate = new Date(event.date);
        const now = new Date();
        const oneWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        const oneMonth = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 2, now.getDate());

        switch (filters.dateRange) {
          case 'This Week':
            if (eventDate > oneWeek) return false;
            break;
          case 'This Month':
            if (eventDate > oneMonth) return false;
            break;
          case 'Next Month':
            if (eventDate < oneMonth || eventDate > nextMonth) return false;
            break;
          case 'This Year':
            if (eventDate.getFullYear() !== now.getFullYear()) return false;
            break;
        }
      }

      // Location filter
      if (filters.location && !event.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex pt-20">
        {/* Sidebar */}
        <EventFilters onFilterChange={setFilters} />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
            >
              Discover Events
            </h1>
            <p
              className="text-lg"
              style={{ color: theme === 'dark' ? '#d4d4d4' : '#666666' }}
            >
              Find and attend amazing events in your area
            </p>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p
              className="text-sm"
              style={{ color: theme === 'dark' ? '#a3a3a3' : '#666666' }}
            >
              Showing {filteredEvents.length} of {events.length} events
            </p>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p
                className="text-lg"
                style={{ color: theme === 'dark' ? '#a3a3a3' : '#666666' }}
              >
                No events found matching your filters.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;