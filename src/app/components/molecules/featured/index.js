import React from 'react';
import { View , Image, StyleSheet } from 'react-native'
import { getScaledValue } from 'renative'
import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import image from '../../../../../platformAssets/runtime/avatarwide.jpeg';
import { dw,dh} from '../../constants'

const styles = StyleSheet.create({
    featuredContainer:{
        width:dw,
        height:dh/2.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    image: {
        marginBottom: getScaledValue(30),
        width: '100%',
        height: '100%',
    },
    infoSection:{
        padding:16,
        width:"100%",
        bottom:0,
        zIndex: 10, 
        position: 'absolute'
    }
})

const Featured = () => {
    return (
        <View style={styles.featuredContainer}>
            <Image style={styles.image} source={image} />
            <View style={styles.infoSection}>
                <Subtitle text={"2009"} size={"sh1"}/>
                <Title text={"Avatar"} size={"h1"} bold/>
            </View>
        </View>
    )
}

export default Featured