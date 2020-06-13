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
        flexDirection:"row"
    },
    overview:{
        color:"white",
        paddingTop:8
    }
})

const SearchItem = () => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.titleSection}>
                    <Subtitle text={"Item"} size={"sh4"} />
                    <Text style={styles.overview}>Vitae lectus erat mollit odio luctus aeneea sit adapsuy</Text>
                </View>
                <View style={styles.ratingSection}>
                    <Rating />
                    <Rating />
                    <Rating />
                </View>
                
            </View>
        </View>
    )
}

export default SearchItem