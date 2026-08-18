import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useHashScroll } from '../../hooks/useHashScroll';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title = "Melissa Harper | Luxury Wedding Planner",
}) => {
  // Reusable hash scroll handler for React Router
  useHashScroll();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
