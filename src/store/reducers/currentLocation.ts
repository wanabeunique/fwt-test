import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TLocation = number | undefined;

interface ICurrentAuthorState {
  data: TLocation;
}

const initialState: ICurrentAuthorState = {
  data: undefined,
};

export const currentLocationSlice = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    setCurrentLocation(state, action: PayloadAction<TLocation>) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { setCurrentLocation } = currentLocationSlice.actions;
export default currentLocationSlice.reducer;
