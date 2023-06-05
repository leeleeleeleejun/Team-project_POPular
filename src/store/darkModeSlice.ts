import { createSlice } from '@reduxjs/toolkit';

export interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: false,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const darkModeReducer = darkModeSlice.reducer;
export const darkModeActions = darkModeSlice.actions;
