import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryOrGenreName: 'popular',
  searchTerm: '',
  page: 1,

  categories: [
    { id: 1, name: 'Popular', value: 'popular' },
    { id: 2, name: 'Top_Rated', value: 'top_rated' },
    { id: 3, name: 'Upcoming', value: 'upcoming' },
  ],

  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ],
};

export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {
    selectCategoryOrGenre: (state, action) => {
      state.categoryOrGenreName = action.payload;
      state.searchTerm = '';
    },

    searchMovie: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { selectCategoryOrGenre, searchMovie } = tmdbSlice.actions;
export default tmdbSlice.reducer;
