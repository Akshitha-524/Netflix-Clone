
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Plus, ThumbsUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories, Movie } from '@/lib/data';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find movie by id in our data
    const foundMovie = categories.flatMap(category => category.movies)
      .find(movie => movie.id === id);
    
    if (foundMovie) {
      setMovie(foundMovie);
    }
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-dark flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-netflix-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-netflix-dark flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl text-netflix-light mb-4">Movie Not Found</h1>
        <p className="text-netflix-gray mb-6">The movie you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/')}
          className="netflix-button"
        >
          Go Back Home
        </button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-netflix-dark">
      <Navbar />
      
      <main className="pt-16">
        {/* Back Button */}
        <div className="px-6 md:px-16 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-netflix-light hover:text-netflix-primary transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Browse
          </button>
        </div>
        
        {/* Hero Section */}
        <div className="relative">
          {/* Backdrop Image */}
          <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
            <img 
              src={movie.backdropUrl} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-netflix-dark/50 to-transparent"></div>
          </div>
          
          {/* Movie Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 transform translate-y-1/2">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              {/* Poster */}
              <div className="w-32 md:w-48 h-48 md:h-72 flex-shrink-0 rounded-md overflow-hidden shadow-xl">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold text-netflix-light mb-2">{movie.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base mb-4">
                  <span className="text-green-500 font-medium">{(movie.rating * 10).toFixed(0)}% Match</span>
                  <span className="text-netflix-light/80">{movie.year}</span>
                  <span className="text-netflix-light/80">{movie.maturityRating}</span>
                  <span className="text-netflix-light/80">{movie.duration}</span>
                </div>
                
                <div className="flex space-x-3 mb-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Movie Details */}
        <div className="mt-28 md:mt-40 px-6 md:px-16 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl text-netflix-light font-medium mb-3">About {movie.title}</h2>
                <p className="text-netflix-light/90 mb-6">{movie.description}</p>
              </div>
              
              <div>
                <div className="mb-4">
                  <span className="text-netflix-light/60 text-sm">Cast: </span>
                  <span className="text-netflix-light text-sm">{movie.cast.join(', ')}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-netflix-light/60 text-sm">Genres: </span>
                  <span className="text-netflix-light text-sm">{movie.genre.join(', ')}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-netflix-light/60 text-sm">Maturity Rating: </span>
                  <span className="text-netflix-light text-sm">{movie.maturityRating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MovieDetails;
