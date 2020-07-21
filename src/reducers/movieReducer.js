import { GET_SEARCH_MOVIES, GET_NOW_PLAYING_MOVIES, GET_LATEST_MOVIE, GET_UPCOMING_MOVIES, GET_CURRENT_MOVIE_DETAILS } from "../actions/actionTypes";
const initialState = {
    searchMovies: [],
    nowPlayingMovies: [],
    latestMovie: {},
    upcomingMovies: [],
    currentMovieDetails: {}
}
export const movieReducer = (state=initialState, action)=> {
    switch (action.type) {
        case GET_SEARCH_MOVIES:
            return {
                ...state,
                searchMovies: action.payload
            }
        case GET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingMovies: action.payload
            }
        case GET_LATEST_MOVIE:
            return {
                ...state,
                latestMovie: action.payload
            }
        case GET_UPCOMING_MOVIES: 
            return {
                ...state,
                upcomingMovies: action.payload
            }
        case GET_CURRENT_MOVIE_DETAILS: 
            return {
                ...state,
                currentMovieDetails: action.payload
            }
        default: return state;
    }
}