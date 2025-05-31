import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    name: '',
  },
  reducers: {
    saveData: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { saveData } = dataSlice.actions;
export default dataSlice.reducer;