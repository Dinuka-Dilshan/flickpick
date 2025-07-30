import AppCarousel from "@/modules/shared/app-carousel";
import type { MovieDetails } from "@/types/movie";

const Cast = ({ movie }: { movie: MovieDetails }) => {
  const { cast } = movie;
  return (
    <AppCarousel
      items={cast?.map((member) => ({
        id: member.id,
        name: member.name,
        image: member.image,
        variant: "Person",
      }))}
      title="Top Cast"
      imageVarient="rounded"
    />
  );
};

export default Cast;
