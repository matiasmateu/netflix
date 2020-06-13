import React from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../../atoms/title'
import { dw } from '../../constants'
import { useNavigate } from 'renative'

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

const SearchBar = (props) => {

    const navigate = useNavigate(props);

    return (
        <View style={styles.searchBarContainer}>
            <View >
                <Title text={"Discover"} size={"h2"}/>    
            </View>
            <View style={styles.textContainer}>  
                <TouchableOpacity
                    onPress={()=>{
                        navigate('search',{}); 
                    }}
                >
                    <Icon name="search" size={20} color="white" />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default SearchBar