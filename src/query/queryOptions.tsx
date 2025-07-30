import appFetch from "@/query/fetch";
import type { Movie, MovieDetails } from "@/types/movie";
import type { Person } from "@/types/person";
import { queryOptions } from "@tanstack/react-query";

export const moviesQueryOprions = queryOptions({
  queryKey: ["movies"],
  queryFn: () => appFetch<Movie[]>({ url: "/movies" }),
});

export const movieQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["movies", id],
    queryFn: () => appFetch<MovieDetails>({ url: `/movies/${id}` }),
  });

export const tvsQueryOprions = queryOptions({
  queryKey: ["tvs"],
  queryFn: () => appFetch<Movie[]>({ url: "/tvs" }),
});

export const tvQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["tvs", id],
    queryFn: () => appFetch<MovieDetails>({ url: `/tvs/${id}` }),
  });

export const personQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["person", id],
    queryFn: () => appFetch<Person>({ url: `/person/${id}` }),
  });
