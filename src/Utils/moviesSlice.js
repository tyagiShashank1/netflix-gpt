import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailer:null,
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies:null,
    upcomingMovies:null,
    movieNames: null, 
    movieResults:null,
  },
  reducers:{
    addTrailer:function(state,action){
      state.trailer=action.payload;
    },
    addNowPlayingMovies: function (state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: function (state, action) {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: function(state,action){
      state.trendingMovies=action.payload;
    },
    addUpcomingMovies:function(state,action){
      state.upcomingMovies=action.payload;
    },
    addGeminiSearchMovies:function(state,action){
      const {movieNames, movieResults} = action.payload;
      state.movieNames=movieNames;
      state.movieResults=movieResults;
    }
  },
});

export const {addTrailer, addNowPlayingMovies, addPopularMovies,addTrendingMovies, addUpcomingMovies,addGeminiSearchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
