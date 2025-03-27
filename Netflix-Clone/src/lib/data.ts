
export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  cast: string[];
  maturityRating: string;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
}

export const featuredContent: Movie = {
  id: "featured1",
  title: "The Last Kingdom",
  description: "As Alfred the Great defends his kingdom from Norse invaders, Uhtred--born a Saxon but raised by Vikings--seeks to claim his ancestral birthright.",
  posterUrl: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
  backdropUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  year: 2022,
  rating: 8.6,
  duration: "2h 15m",
  genre: ["Action", "Drama", "History"],
  cast: ["Alexander Dreymon", "Emily Cox", "David Dawson"],
  maturityRating: "TV-MA"
};

export const categories: Category[] = [
  {
    id: "trending",
    name: "Trending Now",
    movies: [
      {
        id: "movie1",
        title: "Digital Horizon",
        description: "A team of elite hackers uncover a global conspiracy that threatens to change the world as we know it.",
        posterUrl: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
        backdropUrl: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
        year: 2023,
        rating: 8.2,
        duration: "2h 5m",
        genre: ["Thriller", "Sci-Fi", "Drama"],
        cast: ["Emma Watson", "Tom Hardy", "Michael B. Jordan"],
        maturityRating: "PG-13"
      },
      {
        id: "movie2",
        title: "Cityscape",
        description: "An architect with a dark past is drawn into a web of corruption in a futuristic metropolis.",
        posterUrl: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
        backdropUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
        year: 2022,
        rating: 7.9,
        duration: "1h 55m",
        genre: ["Action", "Crime", "Thriller"],
        cast: ["Idris Elba", "Zendaya", "Ryan Gosling"],
        maturityRating: "R"
      },
      {
        id: "movie3",
        title: "Echoes of Tomorrow",
        description: "A physicist discovers time travel and faces moral dilemmas that could change the course of humanity.",
        posterUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        backdropUrl: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
        year: 2023,
        rating: 8.7,
        duration: "2h 30m",
        genre: ["Sci-Fi", "Drama", "Mystery"],
        cast: ["Cillian Murphy", "Ana de Armas", "John Boyega"],
        maturityRating: "PG-13"
      },
      {
        id: "movie4",
        title: "Silent Shadows",
        description: "A retired assassin is forced back into the underworld when her past catches up with her.",
        posterUrl: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
        backdropUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
        year: 2021,
        rating: 7.8,
        duration: "2h 10m",
        genre: ["Action", "Crime", "Drama"],
        cast: ["Charlize Theron", "Keanu Reeves", "Michelle Yeoh"],
        maturityRating: "R"
      },
      {
        id: "movie5",
        title: "Beyond the Stars",
        description: "A crew of astronauts encounter an alien intelligence while on a mission to save humanity.",
        posterUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
        backdropUrl: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
        year: 2023,
        rating: 8.5,
        duration: "2h 25m",
        genre: ["Sci-Fi", "Adventure", "Thriller"],
        cast: ["Oscar Isaac", "Jessica Chastain", "Daniel Kaluuya"],
        maturityRating: "PG-13"
      }
    ]
  },
  {
    id: "popular",
    name: "Popular on Netflix",
    movies: [
      {
        id: "movie6",
        title: "Lost Kingdom",
        description: "An archaeologist discovers an ancient civilization with technology beyond our understanding.",
        posterUrl: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
        backdropUrl: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
        year: 2022,
        rating: 8.1,
        duration: "2h 20m",
        genre: ["Adventure", "Action", "Mystery"],
        cast: ["Tom Holland", "Florence Pugh", "John David Washington"],
        maturityRating: "PG-13"
      },
      {
        id: "movie7",
        title: "Midnight Heist",
        description: "A master thief plans one last job to steal a legendary diamond from a high-security museum.",
        posterUrl: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
        backdropUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        year: 2023,
        rating: 7.7,
        duration: "1h 50m",
        genre: ["Crime", "Thriller", "Action"],
        cast: ["Margot Robbie", "Denzel Washington", "Daniel Craig"],
        maturityRating: "R"
      },
      {
        id: "movie8",
        title: "Dark Waters",
        description: "A marine biologist discovers a terrifying creature in the depths of the ocean.",
        posterUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        backdropUrl: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
        year: 2021,
        rating: 7.4,
        duration: "2h 5m",
        genre: ["Horror", "Sci-Fi", "Thriller"],
        cast: ["Lupita Nyong'o", "Jason Momoa", "Rebecca Ferguson"],
        maturityRating: "R"
      },
      {
        id: "movie9",
        title: "Family Ties",
        description: "Three siblings reunite after their parents' death and uncover family secrets that change everything.",
        posterUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
        backdropUrl: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
        year: 2022,
        rating: 8.3,
        duration: "2h 15m",
        genre: ["Drama", "Mystery"],
        cast: ["Adam Driver", "Saoirse Ronan", "LaKeith Stanfield"],
        maturityRating: "PG-13"
      },
      {
        id: "movie10",
        title: "Final Hour",
        description: "A detective races against time to stop a terrorist attack in the heart of the city.",
        posterUrl: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
        backdropUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
        year: 2023,
        rating: 7.9,
        duration: "2h",
        genre: ["Action", "Thriller", "Crime"],
        cast: ["Idris Elba", "Emily Blunt", "John Krasinski"],
        maturityRating: "R"
      }
    ]
  },
  {
    id: "originals",
    name: "Netflix Originals",
    movies: [
      {
        id: "movie11",
        title: "Crown of Thorns",
        description: "A young ruler must navigate political intrigue and betrayal to save her kingdom.",
        posterUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        backdropUrl: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
        year: 2023,
        rating: 8.5,
        duration: "2h 35m",
        genre: ["Drama", "Fantasy", "Adventure"],
        cast: ["Anya Taylor-Joy", "Timothée Chalamet", "Anthony Mackie"],
        maturityRating: "TV-MA"
      },
      {
        id: "movie12",
        title: "Virtual Reality",
        description: "A programmer creates a virtual world that becomes too real for its inhabitants.",
        posterUrl: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
        backdropUrl: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
        year: 2022,
        rating: 8.2,
        duration: "2h 15m",
        genre: ["Sci-Fi", "Thriller", "Drama"],
        cast: ["Jonathan Majors", "Chris Hemsworth", "Tessa Thompson"],
        maturityRating: "TV-MA"
      },
      {
        id: "movie13",
        title: "Silent Whispers",
        description: "A psychological thriller about a therapist who begins to question her own sanity.",
        posterUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
        backdropUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        year: 2022,
        rating: 7.9,
        duration: "1h 55m",
        genre: ["Thriller", "Mystery", "Horror"],
        cast: ["Elisabeth Moss", "Ethan Hawke", "Amanda Seyfried"],
        maturityRating: "TV-MA"
      },
      {
        id: "movie14",
        title: "Desert Storm",
        description: "A group of soldiers stranded in the desert face both external threats and their own demons.",
        posterUrl: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
        backdropUrl: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
        year: 2021,
        rating: 7.6,
        duration: "2h 10m",
        genre: ["War", "Drama", "Action"],
        cast: ["Pedro Pascal", "Aaron Pierre", "Jodie Comer"],
        maturityRating: "TV-MA"
      },
      {
        id: "movie15",
        title: "Cosmic Voyage",
        description: "An interstellar journey explores the depths of space and human consciousness.",
        posterUrl: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
        backdropUrl: "https://source.unsplash.com/photo-1605810230434-7631ac76ec81",
        year: 2023,
        rating: 8.7,
        duration: "2h 40m",
        genre: ["Sci-Fi", "Adventure", "Drama"],
        cast: ["Tilda Swinton", "Dev Patel", "Steven Yeun"],
        maturityRating: "TV-MA"
      }
    ]
  }
];
