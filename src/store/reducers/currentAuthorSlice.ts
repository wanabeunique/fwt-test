import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAuthor = number | undefined;

interface ICurrentAuthorState {
  data: TAuthor;
}

const initialState: ICurrentAuthorState = {
  data: undefined,
};

export const currentAuthorSlice = createSlice({
  name: 'currentAuthor',
  initialState,
  reducers: {
    setCurrentAuthor(state, action: PayloadAction<TAuthor>) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { setCurrentAuthor } = currentAuthorSlice.actions;
export default currentAuthorSlice.reducer;
