import Cast from "@/modules/MovieDetails/Cast";
import HeroSection from "@/modules/MovieDetails/HeroSection";
import MoreLikeThis from "@/modules/MovieDetails/MoreLikeThis";
import MovieDetailsLoading from "@/modules/MovieDetails/MovieDetailsLoading";
import Trailer from "@/modules/MovieDetails/Trailer";
import DetailsWrapper from "@/modules/shared/details-wrapper";
import { tvQueryOptions } from "@/query/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tvs/$id")({
  component: Tv,
  loader: async ({ context: { queryClient }, params: { id } }) => {
    return queryClient.ensureQueryData(tvQueryOptions(id));
  },
  pendingComponent: MovieDetailsLoading,
  errorComponent: () => <>Loading...</>,
});

function Tv() {
  const { id } = Route.useParams();
  const { data: movie } = useSuspenseQuery(tvQueryOptions(id));

  return (
    <DetailsWrapper>
      <HeroSection movie={movie} />
      <Cast movie={movie} />
      <Trailer movie={movie} />
      <MoreLikeThis movie={movie} />
    </DetailsWrapper>
  );
}
