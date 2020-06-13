import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { getScaledValue } from 'renative'
import image from '../../../../../platformAssets/runtime/avatarwide.jpeg'
import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import { dw,dh } from '../../constants'

const styles = StyleSheet.create({
    posterContainer:{
        flex:1,
        width: dw/2.5,
        height:dh/2.5,
        padding:8
    },  
    imageContainer:{
        flex:4
    },
    infoContainer:{
        flex:1,
        paddingTop:8
    },  
    image: {
        width: '100%',
        height: '100%',
    },
})

const Poster = () =>{
    return (
        <View style={styles.posterContainer}>
            <View style={styles.imageContainer}> 
                <Image style={styles.image} source={image} />
            </View>
                
            <View style={styles.infoContainer}>
                <Title text={"Item One Two Three"} size={"h4"} />
                <Subtitle text={"Categorie"} size={"sh4"} />
            </View>
        </View>
    )
}

export default Poster