export type Person = {
  name: string | null;
  images: {
    primaryImage: string | null;
    caption: string | null;
  };
  description: string | null;
  previous: Array<{
    id: string;
    title: string;
    releaseYear: string;
    type: "Movie" | "TV Series";
    rating: number | "N/A";
    characters: string;
    genres: string;
    imageUrl: string | null;
  }>;
  birthDate: string;
  birthPlace: string;
  height: string;
  professions: string[];
};
