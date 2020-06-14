import React , { useState, useContext, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { themeStyles, hasWebFocusableUI } from './theme';

import SearchItem from './app/components/molecules/searchItem'
import { GlobalContext } from './app/context/globalState'
import _ from 'lodash'

const styles = StyleSheet.create({
    searchInput:{
        padding:8,
        borderRadius:5,
        backgroundColor:"#505050",
        color:"white"
    }
})

const ScreenSearch = (props) => {

    

    const [ searchText , setSearchText ] = useState("") 

    const { search,searchResult,apiConfig,deleteSearchResults } = useContext(GlobalContext)

    const handleSearch = (e) =>{
        const { text } = e.nativeEvent
        search(text)
    }

    useEffect(() => {

        return () => {
            deleteSearchResults()
        };
      }, []);

    return (<View style={themeStyles.screen}>
        <TextInput 
            placeholderTextColor={"gray"}
            placeholder={"Search"}
            style={styles.searchInput}
            onSubmitEditing={handleSearch}
        />
        <ScrollView contentContainerStyle={themeStyles.container}>
            {
                _.isEmpty(searchResult) && <View />
            }
            {
                !_.isEmpty(searchResult) 
                && searchResult.map(item=>{
                    const imageURL = `${apiConfig.images.base_url}${apiConfig.images.poster_sizes[1]}${item.poster_path}`
                    return (
     
                            <SearchItem 
                            navigation={props.navigation}
                            title={item.title}
                            rating={Math.round(item.vote_average/2)}
                            votes={item.vote_count}
                            overview={item.overview}
                            poster_path={item.poster_path}
                            imageURL={imageURL}
                        />
      
                        
                    )
                })
            }
        </ScrollView>
    </View>)
}

export default (hasWebFocusableUI
    ? withFocusable()(ScreenSearch)
    : ScreenSearch);
