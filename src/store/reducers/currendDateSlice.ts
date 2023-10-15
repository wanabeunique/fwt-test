import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentDate {
  start: string | undefined;
  end: string | undefined;
}

const initialState: ICurrentDate = {
  start: undefined,
  end: undefined,
};

export const currendDateSlice = createSlice({
  name: 'currentAuthor',
  initialState,
  reducers: {
    setStartDate(state, action: PayloadAction<string>) {
      return {
        ...state,
        start: action.payload,
      };
    },
    setEndDate(state, action: PayloadAction<string>) {
      return {
        ...state,
        end: action.payload,
      };
    },
    setCurrentDate(state, action: PayloadAction<ICurrentDate>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentDate, setEndDate, setStartDate } =
  currendDateSlice.actions;
export default currendDateSlice.reducer;
