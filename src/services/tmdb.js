import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getPopularMovies: builder.query({
      query: () => `/movie/popular?api_key=${apiKey}&page=1`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = tmdbApi;
