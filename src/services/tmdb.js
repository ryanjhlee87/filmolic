import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    // GET: single movie
    getMovie: builder.query({
      query: id => {
        return `/movie/${id}?api_key=${apiKey}&append_to_response=videos,credits`;
      },
    }),

    // GET: movie list by search term, category name and genre name
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

    // GET: favorite movies
    getFavoriteMovies: builder.query({
      query: (sessionId, accountId) => {
        return `/account/${accountId}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}&page=1`;
      },
    }),

    // GET: watchlist
    getWatchlist: builder.query({
      query: (sessionId, accountId) => {
        return `/account/${accountId}/watchlist/movies?api_key=${apiKey}&session_id=${sessionId}&sort_by=created_at.asc&page=1`;
      },
    }),

    // GET: Actor Details
    getActor: builder.query({
      query: id => {
        return `/person/${id}?api_key=${apiKey}&language=en-US`;
      },
    }),

    // GET: Movies by Actor ID
    getMoviesByActorId: builder.query({
      query: id => `/discover/movie?with_cast=${id}&api_key=${apiKey}`,
    }),

    // Get User Specific Lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId }) =>
        `/account/${accountId}/${listName}?api_key=${apiKey}&session_id=${sessionId}&page=1`,
    }),

    // POST: favorite movie
    addFavoriteMovie: builder.mutation({
      query: (accountId, body) => ({
        url: `/account/${accountId}/favorite?api_key=${apiKey}`,
        method: 'POST',
        headers: body,
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetFavoriteMoviesQuery,
  useAddFavoriteMovieMutation,
  useGetWatchlistQuery,
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
