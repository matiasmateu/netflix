import React from 'react';
import { View , Image, StyleSheet } from 'react-native'
import { getScaledValue } from 'renative'
import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import { dw,dh} from '../../constants'

const styles = StyleSheet.create({
    featuredContainer:{
        marginTop:32,
        width:"100%",
        height:dh/2.5

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