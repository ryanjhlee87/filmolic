import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeRedcuer from '../features/theme/themeSlice';
import { tmdbApi } from '../services/tmdb';

export const store = configureStore({
  reducer: {
    theme: themeRedcuer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
