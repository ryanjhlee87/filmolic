import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkmode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDarkmode = !state.isDarkmode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
