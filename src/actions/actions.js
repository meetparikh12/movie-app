import { GET_SEARCH_MOVIES } from "./actionTypes";

export const setSearchMovies = (movies)=> {
    return {
        type: GET_SEARCH_MOVIES,
        payload: movies
    }
}