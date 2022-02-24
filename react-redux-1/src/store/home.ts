import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';

export const getCurrentDate = createAsyncThunk('getCurrentDate', () => {
  return new Promise<Date>((resolve) => {
    setTimeout(() => resolve(new Date()), 1000);
  });
});

export const deleteCurrentDate = createAction('deleteCurrentDate');

interface IHome {
  currentDate: Date | null;
}

const initialialState: IHome = {
  currentDate: null,
};

const homeReducer = createReducer(initialialState, (builder) => {
  builder.addCase(getCurrentDate.fulfilled, (state, action) => {
    state.currentDate = action.payload;
  });

  builder.addCase(deleteCurrentDate, (state, action) => {
    state.currentDate = null;
  });
});

export default homeReducer;
