import React from 'react';
import { View , Text, StyleSheet, Image} from 'react-native'
import { dh } from '../../constants'
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

const SearchItem = ({votes = 0,rating = 0, overview = "Vitae lectus",title="Title",imageURL = "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg"}) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:imageURL}} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.titleSection}>
                    <Subtitle text={title} size={"sh4"} />
                    <Text style={styles.overview}>{overview}</Text>
                </View>
                <View style={styles.ratingSection}>
                    <Rating color={ rating > 0 ? "white" : "gray"}/>
                    <Rating color={ rating > 1 ? "white" : "gray"}/>
                    <Rating color={ rating > 2 ? "white" : "gray"}/>
                    <Rating color={ rating > 3 ? "white" : "gray"}/>
                    <Rating color={ rating > 4 ? "white" : "gray"}/>
                    <Text style={styles.votes}>{votes}</Text>
                </View>
                
            </View>
        </View>
    )
}

export default SearchItem