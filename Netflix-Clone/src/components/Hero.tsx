
import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '@/lib/data';

interface HeroProps {
  movie: Movie;
  onInfoClick: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onInfoClick }) => {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark via-netflix-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-netflix-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end md:justify-center pb-20 md:pb-0 pl-6 md:pl-16 w-full max-w-3xl z-10">
        <div className="animate-slide-up">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-netflix-light mb-4 text-shadow">
            {movie.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center text-sm text-netflix-light/80 mb-4 space-x-4">
            <span className="text-netflix-primary font-semibold">
              {movie.rating.toFixed(1)} Rating
            </span>
            <span>{movie.year}</span>
            <span>{movie.maturityRating}</span>
            <span>{movie.duration}</span>
          </div>

          {/* Description */}
          <p className="text-netflix-light max-w-xl mb-6 line-clamp-3 md:line-clamp-none text-sm md:text-base">
            {movie.description}
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genre.map((genre) => (
              <span 
                key={genre} 
                className="px-2 py-1 bg-netflix-darkgray/70 text-netflix-light/90 text-xs rounded"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="netflix-button flex items-center space-x-2 px-6 py-2 font-medium">
              <Play size={20} />
              <span>Play</span>
            </button>

            <button 
              onClick={() => onInfoClick(movie)}
              className="flex items-center space-x-2 px-6 py-2 bg-netflix-gray/40 hover:bg-netflix-gray/60 text-white font-medium rounded transition-all duration-300"
            >
              <Info size={20} />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
