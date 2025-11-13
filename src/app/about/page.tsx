'use client';

import { Header, Footer } from '@/components/layout';
import { CTASection, TeamSection, StoryRevealSection } from '@/components/landing';
import { useTheme } from '@/contexts/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20" style={{
        background: theme === 'dark'
          ? 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a, #0a0a0a)'
          : 'linear-gradient(to bottom right, #f5f5f5, #e5e5e5, #f5f5f5)'
      }}>
        <section>
          <CTASection />
        </section>
        <section>
          <StoryRevealSection />
        </section>
        <section>
          <TeamSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}