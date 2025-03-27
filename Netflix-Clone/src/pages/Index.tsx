
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import DetailModal from '@/components/DetailModal';
import Footer from '@/components/Footer';
import { featuredContent, categories, Movie } from '@/lib/data';

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-netflix-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <Hero 
        movie={featuredContent} 
        onInfoClick={handleMovieClick}
      />

      {/* Content Rows */}
      <div className="mt-4 md:-mt-16 relative z-10 pb-10">
        {categories.map((category) => (
          <ContentRow 
            key={category.id}
            category={category}
            onMovieClick={handleMovieClick}
          />
        ))}
      </div>

      {/* Detail Modal */}
      {selectedMovie && (
        <DetailModal 
          movie={selectedMovie}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
