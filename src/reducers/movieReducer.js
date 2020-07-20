import { GET_SEARCH_MOVIES } from "../actions/actionTypes";
const initialState = {
    searchMovies: []
}
export const movieReducer = (state=initialState, action)=> {
    switch (action.type) {
        case GET_SEARCH_MOVIES:
            return {
                searchMovies: action.payload
            }
        default: return state;
    }
}