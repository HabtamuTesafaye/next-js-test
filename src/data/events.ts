export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: number;
  image: string;
  attendees: number;
  organizer: string;
  tags: string[];
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description:
      'Join us for the biggest tech conference of the year featuring keynote speakers from leading tech companies.',
    date: '2024-12-15',
    time: '09:00',
    location: 'San Francisco Convention Center',
    category: 'Technology',
    price: 299,
    image: '/assets/images/event1.jpg',
    attendees: 500,
    organizer: 'TechCorp',
    tags: ['conference', 'technology', 'networking'],
  },
  {
    id: '2',
    title: 'Music Festival Summer',
    description: 'A three-day music festival featuring top artists from around the world.',
    date: '2024-07-20',
    time: '18:00',
    location: 'Central Park',
    category: 'Music',
    price: 150,
    image: '/assets/images/event2.jpg',
    attendees: 2000,
    organizer: 'Music Events Inc',
    tags: ['festival', 'music', 'outdoor'],
  },
  {
    id: '3',
    title: 'Startup Pitch Night',
    description: 'Watch innovative startups pitch their ideas to investors and the community.',
    date: '2024-11-10',
    time: '19:00',
    location: 'Innovation Hub',
    category: 'Business',
    price: 25,
    image: '/assets/images/event3.jpg',
    attendees: 150,
    organizer: 'Startup Community',
    tags: ['startup', 'pitch', 'business'],
  },
  {
    id: '4',
    title: 'Art Exhibition Opening',
    description:
      'Opening night of our contemporary art exhibition featuring local and international artists.',
    date: '2024-10-05',
    time: '17:00',
    location: 'Modern Art Gallery',
    category: 'Arts',
    price: 0,
    image: '/assets/images/event4.jpg',
    attendees: 100,
    organizer: 'Art Collective',
    tags: ['art', 'exhibition', 'free'],
  },
  {
    id: '5',
    title: 'Yoga & Wellness Retreat',
    description: 'A weekend retreat focused on mindfulness, yoga, and holistic wellness practices.',
    date: '2024-08-25',
    time: '08:00',
    location: 'Mountain Resort',
    category: 'Health',
    price: 450,
    image: '/assets/images/event5.jpg',
    attendees: 50,
    organizer: 'Wellness Center',
    tags: ['yoga', 'wellness', 'retreat'],
  },
  {
    id: '6',
    title: 'Food & Wine Tasting',
    description: 'Sample exquisite wines paired with gourmet dishes from top chefs.',
    date: '2024-09-18',
    time: '19:30',
    location: 'Riverside Restaurant',
    category: 'Food',
    price: 85,
    image: '/assets/images/event6.jpg',
    attendees: 80,
    organizer: 'Culinary Arts Society',
    tags: ['food', 'wine', 'tasting'],
  },
];
