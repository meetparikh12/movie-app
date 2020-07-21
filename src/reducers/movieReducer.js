import { GET_SEARCH_MOVIES, GET_NOW_PLAYING_MOVIES, GET_LATEST_MOVIE, GET_UPCOMING_MOVIES, GET_CURRENT_MOVIE_DETAILS, LOADING_UI } from "../actions/actionTypes";
const initialState = {
    searchMovies: [],
    nowPlayingMovies: [],
    latestMovie: {},
    upcomingMovies: [],
    currentMovieDetails: {},
    loadingUI: true
}
export const movieReducer = (state=initialState, action)=> {
    switch (action.type) {
        case LOADING_UI: 
            return {
                ...state,
                loadingUI: true
            }
        case GET_SEARCH_MOVIES:
            return {
                ...state,
                searchMovies: action.payload,
                loadingUI: false
            }
        case GET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingMovies: action.payload,
                loadingUI: false
            }
        case GET_LATEST_MOVIE:
            return {
                ...state,
                latestMovie: action.payload,
                loadingUI: false
            }
        case GET_UPCOMING_MOVIES: 
            return {
                ...state,
                upcomingMovies: action.payload,
                loadingUI: false
            }
        case GET_CURRENT_MOVIE_DETAILS: 
            return {
                ...state,
                currentMovieDetails: action.payload,
                loadingUI: false
            }
        default: return state;
    }
}