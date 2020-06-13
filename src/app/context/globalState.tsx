import React, { createContext, useReducer } from 'react'
import AppReducer from './appReducer'
import axios from 'axios'
import _ from 'lodash'

// Initial State
const initialState = {
        popularMovies:[],
        popularTvSeries:[],
        familyGenre:[],
        documentaryGenre:[],
        apiConfig:{}
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer,initialState);

    

    return (<GlobalContext.Provider value={{
        popularMovies:state.popularMovies,
        popularTvSeries:state.popularTvSeries,
        familyGenre:state.familyGenre,
        documentaryGenre:state.documentaryGenre,
        apiConfig:state.apiConfig
    }}>
        {children}
    </GlobalContext.Provider>); 
}