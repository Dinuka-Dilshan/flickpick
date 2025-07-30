import AppCarousel from "@/modules/shared/app-carousel";
import type { MovieDetails } from "@/types/movie";

const MoreLikeThis = ({ movie }: { movie: MovieDetails }) => {
  const { moreLikeThis } = movie;
  return (
    <AppCarousel
      items={moreLikeThis?.map((item) => ({
        subtitle: item.releaseYear?.toString(),
        id: item.imdbId,
        name: `${item.title.slice(0, 20)}
                  ${item.title.length > 20 ? "..." : ""}`,
        image: item.posterUrl,
        variant: item.titleType === "Movie" ? "Movie" : "TV",
      }))}
      title="More Like This"
      imageVarient="square"
    />
  );
};

export default MoreLikeThis;
