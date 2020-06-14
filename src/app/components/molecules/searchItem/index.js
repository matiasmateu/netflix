import React from 'react';
import { View , Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { dh } from '../../constants'
import { useNavigate } from 'renative'
import image from '../../../../../platformAssets/runtime/avatarwide.jpeg'
import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import Rating from '../../atoms/rating'

const styles = StyleSheet.create({
    container:{
        marginBottom:16,
        height:dh/5,
        flex:1,
        flexDirection:"row"
    },
    imageContainer:{
        flex:1
    },
    infoContainer:{
        flex:3,
        justifyContent:"space-between",
        padding:8
    }   ,
    image:{
        width:"100%",
        height:"100%"
    },
    titleSection:{
        flexDirection:"column"
    },
    ratingSection:{
        flexDirection:"row",
        alignItems:"center"
    },
    overview:{
        color:"white",
        paddingTop:8
    },
    votes:{
        color:"gray",
        paddingLeft:8,
        fontSize:12
    }
})

const SearchItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{useNavigate(props)('modal',{},props)}}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:props.imageURL}} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.titleSection}>
                    <Title text={props.title} size={"h4"} bold />
                    <Text 
                        numberOfLines={3}
                        style={styles.overview}>{props.overview}</Text>
                </View>
                <View style={styles.ratingSection}>
                    <Rating color={ props.rating > 0 ? "white" : "gray"}/>
                    <Rating color={ props.rating > 1 ? "white" : "gray"}/>
                    <Rating color={ props.rating > 2 ? "white" : "gray"}/>
                    <Rating color={ props.rating > 3 ? "white" : "gray"}/>
                    <Rating color={ props.rating > 4 ? "white" : "gray"}/>
                    <Text style={styles.votes}>{props.votes}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

export default SearchItem