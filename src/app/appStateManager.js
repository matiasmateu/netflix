import React, { useContext } from 'react';
import { AppState, View, Text, AsyncStorage } from 'react-native';
import { GlobalContext } from './context/globalState'
import _ from 'lodash'
export const AppStateManager = ( props) => {

    const [ appState , setAppState ] = React.useState(AppState.currentState)

    const { 
        apiConfig,
        popularMovies,
        popularTvSeries,
        familyGenre,
        documentaryGenre,
        setPopularMovies, 
        setAPIConfig, 
        setDocumentaries, 
        setPopularTvSeries, 
        setMovieGenres,
        movieGenres,
        setFamilyMovies } = useContext(GlobalContext)

    const handleAppStateChange = (state) => {

        

        switch(state){
            case 'active':
                if (_.isEmpty(apiConfig)) setAPIConfig()
                if (_.isEmpty(popularMovies)) setPopularMovies()
                if (_.isEmpty(popularTvSeries)) setPopularTvSeries()
                if (_.isEmpty(familyGenre)) setFamilyMovies()
                if (_.isEmpty(documentaryGenre)) setDocumentaries()
                if (_.isEmpty(movieGenres)) setMovieGenres()
            case 'inactive':
                
            case 'background':   
                
            default:
        }
        
        setAppState(state)
    }
    
    React.useEffect(()=>{
        AppState.addEventListener('change',handleAppStateChange)
     
        if (_.isEmpty(apiConfig)) setAPIConfig()
        if (_.isEmpty(popularMovies)) setPopularMovies()
        if (_.isEmpty(popularTvSeries)) setPopularTvSeries()
        if (_.isEmpty(familyGenre)) setFamilyMovies()
        if (_.isEmpty(documentaryGenre)) setDocumentaries()
        if (_.isEmpty(movieGenres)) setMovieGenres()
        return (()=>{
            AppState.removeEventListener('change',handleAppStateChange)
        })
    },[])

    return (
        <>{props.children}</>
    )
} 

export default AppStateManager;