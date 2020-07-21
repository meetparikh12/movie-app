import { GET_SEARCH_MOVIES, GET_NOW_PLAYING_MOVIES, GET_UPCOMING_MOVIES, GET_LATEST_MOVIE, GET_CURRENT_MOVIE_DETAILS } from "./actionTypes";

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

export const setCurrentMovieDetails = (movieDetails)=> {
    return {
        type: GET_CURRENT_MOVIE_DETAILS,
        payload: movieDetails
    }
}