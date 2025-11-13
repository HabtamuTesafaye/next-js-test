'use client';

import { useState } from 'react';
import { useThemeColors } from '@/contexts/ThemeContext';

interface EventFiltersProps {
  onFilterChange: (filters: {
    category: string;
    priceRange: string;
    dateRange: string;
    location: string;
  }) => void;
}

const EventFilters = ({ onFilterChange }: EventFiltersProps) => {
  const colors = useThemeColors();
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    dateRange: '',
    location: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories = ['All', 'Technology', 'Music', 'Business', 'Arts', 'Health', 'Food'];
  const priceRanges = ['All', 'Free', '$0-$50', '$50-$100', '$100+'];
  const dateRanges = ['All', 'This Week', 'This Month', 'Next Month', 'This Year'];

  return (
    <div className="w-80 p-6 border-r" style={{ borderColor: colors.border }}>
      <h3
        className="text-lg font-bold mb-6"
        style={{ color: colors['text-primary'] }}
      >
        Filters
      </h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: colors['text-primary'] }}
        >
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
            color: colors['text-primary'],
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category === 'All' ? '' : category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: colors['text-primary'] }}
        >
          Price Range
        </label>
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
            color: colors['text-primary'],
          }}
        >
          {priceRanges.map((range) => (
            <option key={range} value={range === 'All' ? '' : range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Date Range Filter */}
      <div className="mb-6">
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: colors['text-primary'] }}
        >
          Date Range
        </label>
        <select
          value={filters.dateRange}
          onChange={(e) => handleFilterChange('dateRange', e.target.value)}
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
            color: colors['text-primary'],
          }}
        >
          {dateRanges.map((range) => (
            <option key={range} value={range === 'All' ? '' : range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Location Filter */}
      <div className="mb-6">
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: colors['text-primary'] }}
        >
          Location
        </label>
        <input
          type="text"
          placeholder="Enter location..."
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
            color: colors['text-primary'],
          }}
        />
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          const cleared = { category: '', priceRange: '', dateRange: '', location: '' };
          setFilters(cleared);
          onFilterChange(cleared);
        }}
        className="w-full py-2 px-4 rounded-lg font-medium transition-colors"
        style={{
          backgroundColor: colors.primary,
          color: '#ffffff',
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default EventFilters;