import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    title:{
        opacity:1,
        color:"white"
    },
    h1:{
        fontSize:30,
        fontWeight:"bold"
    },
    p:{
        fontSize:16
    }
})

const Title = ({text="",size="p"}) => {

    const titleSize = (size==="h1")
        ? styles.h1
        : styles.p
        
    return (
        <Text style={[styles.title,titleSize]}>{text}</Text>
    )
}

export default Title