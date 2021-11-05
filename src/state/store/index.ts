import { configureStore } from "@reduxjs/toolkit";
import SkiTripsReducer from "../slices/TripSlice";

export const store = configureStore({
  reducer: {
    skiTrips: SkiTripsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
