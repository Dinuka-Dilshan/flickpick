export type Movie = {
  imdbId: string;
  title: string;
  releaseYear: number;
  posterUrl: string;
  rank: number;
  rating: number;
  voteCount: string;
  rankChange: {
    changeDirection: "UP" | "DOWN" | "FLAT";
    difference: number;
  };
  changeDirection: "UP" | "DOWN" | "FLAT";
  difference: number;
};

export type MovieDetails = {
  title: string;
  ratings?: number;
  voteCount?: number;
  releaseYear?: number;
  certificate?: string;
  runtime?: string;
  runtimeSeconds?: number;
  posterUrl: string;
  videoUrls?: Array<{
    url?: string;
    thumbnail: string;
  }>;
  genres?: string[];
  plot?: string;
  imdbId: string;
  releaseDate?: string;
  meterRanking?: {
    currentRank?: number;
    rankChange?: {
      changeDirection?: "UP" | "DOWN" | "FLAT";
      difference?: number;
    };
  };
  titleType?: string;
  isSeries?: boolean;
  publicationStatus?: string;
  countriesOfOrigin?: string[];
  creators?: string[];
  moreLikeThis?: Array<{
    posterUrl: string;
    title: string;
    releaseYear?: number;
    titleType?: string;
    imdbId: string;
  }>;
  cast?: Array<{
    id: string;
    name: string;
    image: string;
  }>;
  episodes?: number;
  seasons?: number;
  images?: string[];
  credits?: {
    directors?: Array<{
      id: string;
      name: string;
    }>;
    writers?: Array<{
      id: string;
      name: string;
    }>;
  };
};
