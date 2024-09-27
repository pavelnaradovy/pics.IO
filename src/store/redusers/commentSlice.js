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
    removeById: (state, action) => {
      state.comments = state.comments.filter((e) => e.id !== action.payload);
    },
    add: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { init, removeById, incrementByAmount } = commentSlice.actions;

export default commentSlice.reducer;
