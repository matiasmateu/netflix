import React , { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { getScaledValue } from 'renative'
import image from '../../../../../platformAssets/runtime/avatarwide.jpeg'
import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import { dw,dh } from '../../constants'
import { GlobalContext } from '../../../context/globalState'
import _ from 'lodash'
const styles = StyleSheet.create({
    posterContainer:{
        flex:1,
        width: getScaledValue(200),
        height: getScaledValue(350),
        padding:8,
        justifyContent:"space-between"

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

const Poster = ({title,subtitle,baseURL,posterSize,posterPath}) =>{
    return (
        <View style={styles.posterContainer}>
            <View style={styles.imageContainer}> 
                <Image style={styles.image} source={{uri:`${baseURL}w500${posterPath}`}} />
            </View>
                
            <View style={styles.infoContainer}>
                <Title text={title} size={"h4"} bold/>
                <Subtitle text={subtitle} size={"sh4"} />
            </View>
        </View>
    )
}

export default Poster