import { useState, useEffect } from 'react';

export const useScrollspy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
};
