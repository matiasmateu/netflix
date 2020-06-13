import React from 'react';

export default (state, action) => {
    switch (action.type) {
        case "SET_POPULAR_MOVIES":
            return {
                ...state,
                popularMovies: action.payload
            }
        case "SET_API_CONFIG":
            return {
                ...state,
                apiConfig: action.payload
            }
        case "SET_POPULAR_TV_SERIES":
            return {
                ...state,
                popularTvSeries: action.payload
            }
        case "SET_FAMILY_MOVIES":
            return {
                ...state,
                familyGenre: action.payload
            }
        case "SET_DOCUMENTARIES":
            return {
                ...state,
                documentaryGenre: action.payload
            }
        default:
            return state
    }
}