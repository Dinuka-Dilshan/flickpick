import Cast from "@/modules/MovieDetails/Cast";
import HeroSection from "@/modules/MovieDetails/HeroSection";
import MoreLikeThis from "@/modules/MovieDetails/MoreLikeThis";
import MovieDetailsLoading from "@/modules/MovieDetails/MovieDetailsLoading";
import Trailer from "@/modules/MovieDetails/Trailer";
import DetailsWrapper from "@/modules/shared/details-wrapper";
import { movieQueryOptions } from "@/query/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movies/$id")({
  component: Movie,
  loader: async ({ context: { queryClient }, params: { id } }) => {
    return queryClient.ensureQueryData(movieQueryOptions(id));
  },
  pendingComponent: MovieDetailsLoading,
  errorComponent: () => <>Loading...</>,
});

function Movie() {
  const { id } = Route.useParams();
  const { data: movie } = useSuspenseQuery(movieQueryOptions(id));
  return (
    <DetailsWrapper>
      <HeroSection movie={movie} />
      <Cast movie={movie} />
      <Trailer movie={movie} />
      <MoreLikeThis movie={movie} />
    </DetailsWrapper>
  );
}
