import {
  configureStore,
  getDefaultMiddleware,
  miniSerializeError,
} from '@reduxjs/toolkit';
import themeRedcuer from '../features/theme/themeSlice';
import tmdbReducer from '../features/tmdb/tmdbSlice';
import { tmdbApi } from '../services/tmdb';

export const store = configureStore({
  reducer: {
    theme: themeRedcuer,
    tmdb: tmdbReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      tmdbApi.middleware
    ),
});
