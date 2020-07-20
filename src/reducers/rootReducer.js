import { movieReducer } from "./movieReducer";
const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
    movies: movieReducer
})