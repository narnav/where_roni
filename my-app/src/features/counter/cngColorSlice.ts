import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';
import { MyColors } from '../../models/MyColors';

export interface cngColorState {
  color: MyColors['color'];
  status: 'idle' | 'loading' | 'failed' | 8;
}

const initialState: cngColorState = {
  color: 'blue',
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'cngColor/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const cngColorSlice = createSlice({
  name: 'cngColor',
  initialState,
  reducers: {
    cngColor: (state, action: PayloadAction<MyColors>) => {
      state.color = action.payload.color;
      console.log(state.color);
      
      // You can also update other properties of the state if needed
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { cngColor } = cngColorSlice.actions;
export const selectColor = (state: RootState) => state.cngColor.color;
export default cngColorSlice.reducer;
