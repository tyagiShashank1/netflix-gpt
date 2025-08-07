import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer:null,
  },
  reducers: {
    addNowPlayingMovies: function (state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer:function(state,action){
      state.trailer=action.payload;
    },
    removeNowPlayingMovies:function(state,action){
     state.nowPlayingMovies = null;
    }
  },
});

export const { addNowPlayingMovies,removeNowPlayingMovies, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
