
import React, { useEffect, useRef } from 'react';
import { X, Play, Plus, ThumbsUp, Volume2, VolumeX } from 'lucide-react';
import { Movie } from '@/lib/data';

interface DetailModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ movie, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-netflix-dark/80 backdrop-blur-sm p-4 md:p-10 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-netflix-darkgray rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden animate-scale-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-netflix-light bg-netflix-dark/60 hover:bg-netflix-dark/80 rounded-full p-1 transition-colors duration-300"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        {/* Header Media */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src={movie.backdropUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-darkgray via-transparent to-transparent" />
          
          {/* Floating Controls */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-netflix-light mb-4 text-shadow">{movie.title}</h2>
            
            <div className="flex space-x-3">
              <button className="netflix-button flex items-center space-x-2">
                <Play size={18} />
                <span>Play</span>
              </button>
              
              <button className="w-10 h-10 rounded-full bg-netflix-darkgray/60 hover:bg-netflix-darkgray/80 border border-netflix-gray flex items-center justify-center text-netflix-light transition-colors duration-300">
                <Plus size={20} />
              </button>
              
              <button className="w-10 h-10 rounded-full bg-netflix-darkgray/60 hover:bg-netflix-darkgray/80 border border-netflix-gray flex items-center justify-center text-netflix-light transition-colors duration-300">
                <ThumbsUp size={20} />
              </button>
              
              <div className="ml-auto">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-netflix-darkgray/60 hover:bg-netflix-darkgray/80 border border-netflix-gray flex items-center justify-center text-netflix-light transition-colors duration-300"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              {/* Metadata Row */}
              <div className="flex items-center mb-4 space-x-4 text-sm">
                <span className="text-green-500 font-medium">{(movie.rating * 10).toFixed(0)}% Match</span>
                <span className="text-netflix-light/80">{movie.year}</span>
                <span className="text-netflix-light/80">{movie.maturityRating}</span>
                <span className="text-netflix-light/80">{movie.duration}</span>
              </div>
              
              {/* Description */}
              <p className="text-netflix-light mb-6">{movie.description}</p>
            </div>
            
            <div className="md:w-1/3">
              {/* Cast */}
              <div className="mb-4">
                <span className="text-netflix-light/60 text-sm">Cast: </span>
                <span className="text-netflix-light text-sm">{movie.cast.join(', ')}</span>
              </div>
              
              {/* Genres */}
              <div className="mb-4">
                <span className="text-netflix-light/60 text-sm">Genres: </span>
                <span className="text-netflix-light text-sm">{movie.genre.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
