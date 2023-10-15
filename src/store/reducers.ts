import { combineReducers } from '@reduxjs/toolkit';
import currentAuthorSlice from './reducers/currentAuthorSlice';
import currentLocation from './reducers/currentLocation';
import currentPageSlice from './reducers/currentPageSlice';
import currendDateSlice from './reducers/currendDateSlice';

const rootReducer = combineReducers({
  currentAuthor: currentAuthorSlice,
  currentLocations: currentLocation,
  currentPage: currentPageSlice,
  currentDate: currendDateSlice,
});

export default rootReducer;
