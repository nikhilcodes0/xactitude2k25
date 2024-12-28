// components/Cursor.tsx
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

interface CursorProps {
  hoverType: string | null; // Can be 'card', 'link', 'navbar-link', or null
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
        'fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[1000] transition-all hidden lg:block',
        'transition-all duration-300 ease-out',
        hoverType === 'card' && 'w-fit h-11 pt-3 bg-[#40E0D0] rounded-lg', // Scale for card hover
        hoverType === 'link' && 'top-[-25px] left-[-30px] w-16 h-16 bg-transparent border-[#40E0D0] border-[2px] ease-linear rounded-full', // Scale for link hover
        !hoverType && 'w-4 h-4 bg-white rounded-full ' // Default style
      )}
    >
      {/* Show the "Learn More" text only when hovering over the card */}
      {hoverType === 'card' && (
        <span className="text-white text-sm font-semibold py-3  px-3 border-2 border-white rounded-lg font-sans text-center">
          Learn More
        </span>
      )}
    </div>
  );
};

export default Cursor;

