import {
  configureStore,
  getDefaultMiddleware,
  miniSerializeError,
} from '@reduxjs/toolkit';
import themeRedcuer from '../features/theme/themeSlice';
import tmdbReducer from '../features/tmdb/tmdbSlice';
import userReducer from '../features/auth/auth';
import { tmdbApi } from '../services/tmdb';

export const store = configureStore({
  reducer: {
    theme: themeRedcuer,
    tmdb: tmdbReducer,
    user: userReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      tmdbApi.middleware
    ),
});
