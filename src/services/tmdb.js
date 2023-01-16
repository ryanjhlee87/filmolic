import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getMovies: builder.query({
      query: categoryOrGenreName => {
        if (categoryOrGenreName && typeof categoryOrGenreName === 'string') {
          return `/movie/${categoryOrGenreName}?api_key=${apiKey}&page=1`;
        }

        if (categoryOrGenreName && typeof categoryOrGenreName === 'number') {
          return `/discover/movie?api_key=${apiKey}&with_genres=${categoryOrGenreName}&page=1`;
        }

        return `/movie/popular?api_key=${apiKey}&page=1`;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
