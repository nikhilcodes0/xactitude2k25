// components/Cursor.tsx
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

interface CursorProps {
  hoverType: string | null; // Can be 'card', 'link', or null
}

const Cursor: React.FC<CursorProps> = ({ hoverType }) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={clsx(
        'fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-linear z-50 rounded-full',
        hoverType === 'card' && 'w-16 h-16 bg-green-500', // Style for card hover
        hoverType === 'link' && 'w-8 h-8 bg-red-500 ease-linear', // Style for link hover
        !hoverType && 'w-4 h-4 bg-white bg-opacity-50' // Default style
      )}
    />
  );
};

export default Cursor;
