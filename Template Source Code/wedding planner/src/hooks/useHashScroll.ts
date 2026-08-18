import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable hook for handling hash scrolling in React Router.
 * Automatically scrolls to element with id matching location.hash (e.g. #wedding-day),
 * accounting for fixed navbar offset.
 */
export const useHashScroll = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      // Small timeout ensures DOM elements are rendered on route transition
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
};
