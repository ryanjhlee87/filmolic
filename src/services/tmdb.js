import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getMovies: builder.query({
      query: ({ categoryOrGenreName, searchTerm, page }) => {
        if (searchTerm) {
          return `/search/movie?query=${searchTerm}&page=${page}&api_key=${apiKey}`;
        }

        if (categoryOrGenreName && typeof categoryOrGenreName === 'string') {
          return `/movie/${categoryOrGenreName}?api_key=${apiKey}&page=${page}`;
        }

        if (categoryOrGenreName && typeof categoryOrGenreName === 'number') {
          return `/discover/movie?api_key=${apiKey}&with_genres=${categoryOrGenreName}&page=${page}`;
        }

        return `/movie/popular?api_key=${apiKey}&page=${page}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
