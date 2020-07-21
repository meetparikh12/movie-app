import { GET_SEARCH_MOVIES, GET_NOW_PLAYING_MOVIES, GET_LATEST_MOVIE, GET_UPCOMING_MOVIES } from "../actions/actionTypes";
const initialState = {
    searchMovies: [],
    nowPlayingMovies: [],
    latestMovie: {},
    upcomingMovies: []
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
        default: return state;
    }
}