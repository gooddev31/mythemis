// slices/activeComponentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveComponentState {
  value: string;
}

const initialState: ActiveComponentState = {
  value: 'dashboard',
};

export const activeComponentSlice = createSlice({
  name: 'activeComponent',
  initialState,
  reducers: {
    setActiveComponent: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveComponent } = activeComponentSlice.actions;

export default activeComponentSlice.reducer;
