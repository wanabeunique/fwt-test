import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentAuthorState {
  data: number;
}

const initialState: ICurrentAuthorState = {
  data: 1,
};

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
