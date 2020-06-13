import React from 'react';
import { View , Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    searchBarContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center'
    },
    searchBarTextPlaceholder:{
        color:"white",
        fontSize: 19
    },
    textContainer:{
        paddingLeft:5
    }
})

const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <View >
                <Text style={styles.searchBarTextPlaceholder}>Discover</Text>
                
            </View>
            <View style={styles.textContainer}>  
                <Icon name="search" size={20} color="white" />
            </View>
        </View>
    )
}

export default SearchBar