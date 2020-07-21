import { GET_SEARCH_MOVIES, GET_NOW_PLAYING_MOVIES, GET_UPCOMING_MOVIES, GET_LATEST_MOVIE } from "./actionTypes";

export const setSearchMovies = (movies)=> {
    return {
        type: GET_SEARCH_MOVIES,
        payload: movies
    }
}

export const setNowPlayingMovies = (movies)=> {
    return {
        type: GET_NOW_PLAYING_MOVIES,
        payload: movies
    }
}

export const setUpcomingMovies = (movies)=> {
    return {
        type: GET_UPCOMING_MOVIES,
        payload: movies
    }
}

export const setLatestMovie = (movie)=> {
    return {
        type: GET_LATEST_MOVIE,
        payload: movie
    }
}