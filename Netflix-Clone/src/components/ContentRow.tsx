
import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { Category, Movie } from '@/lib/data';
import { useIsMobile } from '@/hooks/use-mobile';

interface ContentRowProps {
  category: Category;
  onMovieClick: (movie: Movie) => void;
}

const ContentRow: React.FC<ContentRowProps> = ({ category, onMovieClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = useIsMobile();
  
  const scrollAmount = isMobile ? 160 : 200;

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current && !isScrolling) {
      setIsScrolling(true);
      const { scrollLeft } = rowRef.current;
      const newScrollLeft = direction === 'left' 
        ? scrollLeft - scrollAmount * 2
        : scrollLeft + scrollAmount * 2;
        
      rowRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Reset isScrolling after animation completes
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  return (
    <div className="relative px-4 md:px-16 mb-8">
      {/* Category Title */}
      <h2 className="text-xl md:text-2xl text-netflix-light font-medium mb-4">{category.name}</h2>
      
      {/* Content Row with Scroll Buttons */}
      <div className="relative group">
        {/* Left Scroll Button */}
        {showLeftArrow && !isMobile && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center w-12 bg-netflix-dark/50 text-netflix-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {/* Scrollable Content */}
        <div
          ref={rowRef}
          className="flex space-x-2 overflow-x-auto scrollbar-none pb-4"
          onScroll={handleScroll}
        >
          {category.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={onMovieClick}
            />
          ))}
        </div>
        
        {/* Right Scroll Button */}
        {showRightArrow && !isMobile && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center w-12 bg-netflix-dark/50 text-netflix-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
