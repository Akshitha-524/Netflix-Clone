
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '@/lib/data';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative flex-shrink-0 w-[160px] md:w-[200px] h-[225px] md:h-[280px] rounded-md overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Card */}
      <img 
        src={movie.posterUrl} 
        alt={movie.title}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Hover State */}
      {isHovered && (
        <div className="absolute inset-0 bg-netflix-dark/70 backdrop-blur-sm flex flex-col p-3 transition-opacity duration-300 animate-fade-in">
          {/* Preview Image */}
          <div className="relative w-full h-24 mb-2 overflow-hidden rounded-sm">
            <img 
              src={movie.backdropUrl} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-8 h-8 rounded-full bg-white/90 text-netflix-dark flex items-center justify-center">
                <Play size={18} />
              </button>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-netflix-light font-medium text-sm mb-1 line-clamp-1">{movie.title}</h3>
          
          {/* Metadata */}
          <div className="flex items-center text-xs text-netflix-light/80 space-x-2 mb-2">
            <span className="text-netflix-primary">{movie.rating.toFixed(1)}</span>
            <span>{movie.year}</span>
            <span>{movie.maturityRating}</span>
          </div>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-1 mb-auto">
            {movie.genre.slice(0, 2).map((genre) => (
              <span key={genre} className="text-[10px] text-netflix-light/80">
                {genre}{movie.genre.indexOf(genre) < Math.min(1, movie.genre.length - 1) ? ' • ' : ''}
              </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-between mt-1">
            <div className="flex space-x-2">
              <button className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-netflix-light flex items-center justify-center transition-colors duration-300">
                <Plus size={16} />
              </button>
              <button className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-netflix-light flex items-center justify-center transition-colors duration-300">
                <ThumbsUp size={16} />
              </button>
            </div>
            <button 
              onClick={() => onClick(movie)}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-netflix-light flex items-center justify-center transition-colors duration-300"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
