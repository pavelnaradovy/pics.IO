import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    init: (state, action) => {
      state.comments = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { init, decrement, incrementByAmount } = commentSlice.actions;

export default commentSlice.reducer;
