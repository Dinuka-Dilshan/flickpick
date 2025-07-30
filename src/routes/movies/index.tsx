import MovieList from "@/modules/PopularMovies/MovieList";
import LoadingMovieList from "@/modules/PopularMovies/MovieList/LoadingMovieList";
import { moviesQueryOprions } from "@/query/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movies/")({
  component: Movies,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(moviesQueryOprions);
  },
  pendingComponent: () => <LoadingMovieList title={"Trending Movies"} />,
  errorComponent: () => <>Error...</>,
});

function Movies() {
  const { data } = useSuspenseQuery(moviesQueryOprions);
  return <MovieList movies={data} title={"Trending Movies"} type={"Movie"} />;
}
