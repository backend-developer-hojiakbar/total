import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  paid: false,
  amount: null
};

const bronSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pay(state, action) {
      console.log(action, 'heyyyyyyyy');
      state.amount = action.payload.amount
      state.data = action.payload.data
    },
  },
});

export const { pay } = bronSlice.actions;
export default bronSlice.reducer;
