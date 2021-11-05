import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import client from "../../constants/AxiosClient";
import SkiTrips from "../../constants/skiTrips";
import FetchStatus from "../../interfaces/FetchStatus";
import SkiTrip from "../../interfaces/SkiTrip";

interface SkiTripState {
  skiTrips: SkiTrip[];
  status: FetchStatus;
}

const initialState: SkiTripState = {
  skiTrips: SkiTrips,
  status: FetchStatus.Resolved,
};

// This thunk will automatically dispatch a 'pending' action before calling the api
// and a 'fullfiled' or 'rejected' action depending on how the request resolved
const fetchSkiTrips = createAsyncThunk("SkiTrips/fetchTrips", async () => {
  const req = await client.get<SkiTrip>("/trips");
});

const skiTripsSlice = createSlice({
  name: "SkiTrips",
  initialState,
  reducers: {
    getTrips(state) {
      // State can be inmutable because it's using immer to handle inmutability under the hood
      state.skiTrips = [...SkiTrips];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkiTrips.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      // TODO: fix PayloadAction<any> -> Replace with proper type
      .addCase(fetchSkiTrips.fulfilled, (state, action: PayloadAction<any>) => {
        state.skiTrips = action.payload;
        state.status = FetchStatus.Resolved;
      });
  },
});

export const { getTrips } = skiTripsSlice.actions;
export default skiTripsSlice.reducer;
