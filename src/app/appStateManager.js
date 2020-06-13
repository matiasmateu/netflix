import React, { useContext } from 'react';
import { AppState, View, Text, AsyncStorage } from 'react-native';
import { GlobalContext } from './context/globalState'

export const AppStateManager = ( props) => {

    const [ appState , setAppState ] = React.useState(AppState.currentState)

    const { setPopularMovies, setAPIConfig, setDocumentaries, setPopularTvSeries, setFamilyMovies } = useContext(GlobalContext)

    const handleAppStateChange = (state) => {


        switch(state){
            case 'active':
                setAPIConfig()
                setPopularTvSeries()
                setPopularMovies()
                setFamilyMovies()
                setDocumentaries()
            case 'inactive':
                
            case 'background':   
                
            default:
        }
        
        setAppState(state)
    }
    
    React.useEffect(()=>{
        AppState.addEventListener('change',handleAppStateChange)
        
        return (()=>{
            
            AppState.removeEventListener('change',handleAppStateChange)
        })
    },[])

    return (
        <>{props.children}</>
    )
} 

export default AppStateManager;