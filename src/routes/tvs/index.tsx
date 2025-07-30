import MovieList from "@/modules/PopularMovies/MovieList";
import LoadingMovieList from "@/modules/PopularMovies/MovieList/LoadingMovieList";
import { tvsQueryOprions } from "@/query/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tvs/")({
  component: Tvs,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(tvsQueryOprions);
  },
  pendingComponent: () => <LoadingMovieList title={"Trending Tvs"} />,
  errorComponent: () => <>Error...</>,
});

function Tvs() {
  const { data } = useSuspenseQuery(tvsQueryOprions);
  return <MovieList movies={data} title={"Trending Tvs"} type={"TV"} />;
}
