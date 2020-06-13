import React, { useContext } from 'react';
import { AppState, View, Text, AsyncStorage } from 'react-native';
import { GlobalContext } from '../app/context/globalState'

export const AppStateManager = ( props : any ) => {

    const [ appState , setAppState ] = React.useState(AppState.currentState)

    const handleAppStateChange = (state:any) => {


        switch(state){
            case 'active':
                
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