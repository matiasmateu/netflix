import React, { createContext, useReducer } from 'react'
import AppReducer from './appReducer'
import axios from 'axios'
import _ from 'lodash'

// Initial State
export const initialState = {
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

    const instance = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        timeout: 1000,
        // The token should be stored in a secure-encrypted store. Since we are not implementing a Auth Screen and due to time restriction, I'm using it like this.
        headers: {'Authorization': 'Bearer '+ "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTNhM2YzOWVmZmY1MjJlZDk0MWU2ODVkNTdlMTVkNCIsInN1YiI6IjVlZTI0ZjhjOTBkZGUwMDAyMWFhZDVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hp-8shLWOQgRIj7lwRGwITD7jLRvsFfx8NVCmBG3Nsc"}
    });
    
     function filterCorruptedMovies(collection:Array<object>):Array<object>{
        return collection.filter((movie:object)=>{
            if (
                movie.hasOwnProperty("poster_path") 
                && !_.isEmpty(movie.poster_path)
                && movie.hasOwnProperty("overview") 
                && !_.isEmpty(movie.overview)
            ){
                return movie
            }
        })
    }
    
     async function setPopularMovies () {
        try{
            const response = await instance.get('/movie/popular')
            dispatch({
                type:"SET_POPULAR_MOVIES",
                payload:filterCorruptedMovies(response.data.results)
            })
        }catch(err){
             
        }
    }
    
     async function setPopularTvSeries () {
        try{
            const response = await instance.get('/tv/popular?query={title:minLength:1}')
            dispatch({
                type:"SET_POPULAR_TV_SERIES",
                payload:filterCorruptedMovies(response.data.results)
            })
        }catch(err){
             
        }
    }
    
     async function setFamilyMovies () {
        try{
            const response = await instance.get('/discover/movie?with_genres=10751')
            dispatch({
                type:"SET_FAMILY_MOVIES",
                payload:filterCorruptedMovies(response.data.results)
            })
        }catch(err){
             
        }
    }
    
     async function setDocumentaries () {
        try{
            const response = await instance.get('/discover/movie?with_genres=99')
            dispatch({
                type:"SET_DOCUMENTARIES",
                payload:filterCorruptedMovies(response.data.results)
            })
        }catch(err){
             
        }
    }
    
     async function setAPIConfig(){
        try{
            const response = await instance.get('/configuration')
            dispatch({
                    type:"SET_API_CONFIG",
                    payload:response.data
            })
        }catch(err){
             
        }
    }

    return (<GlobalContext.Provider value={{
        popularMovies:state.popularMovies,
        popularTvSeries:state.popularTvSeries,
        familyGenre:state.familyGenre,
        documentaryGenre:state.documentaryGenre,
        apiConfig:state.apiConfig,
        setPopularMovies,
        setPopularTvSeries,
        setFamilyMovies,
        setDocumentaries,
        setAPIConfig
    }}>
        {children}
    </GlobalContext.Provider>); 
}