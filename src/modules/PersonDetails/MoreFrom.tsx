import AppCarousel from "@/modules/shared/app-carousel";
import type { Person } from "@/types/person";

type Props = {
  person: Person;
};

const MoreFrom = ({ person: { previous } }: Props) => {
  return (
    <AppCarousel
      title={`More from ${name}`}
      items={previous.map((movie) => ({
        id: movie.id,
        name: movie.title ?? "",
        variant: movie.type === "Movie" ? "Movie" : "TV",
        image: movie.imageUrl ?? "",
        subtitle: movie.releaseYear ?? " ",
      }))}
    />
  );
};

export default MoreFrom;
