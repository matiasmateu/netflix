import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    title:{
        opacity:1,
        color:"white"
    },
    h1:{
        fontSize:30
    },
    h2:{
        fontSize:20
    },
    h3:{
        fontSize:16
    },
    h4:{
        fontSize:14
    },
    h5:{
        fontSize:12
    },
    h6:{
        fontSize:10
    },
    p:{
        fontSize:16
    },
    bold:{
        fontWeight:"bold"
    }
})

const Title = ({text="",size="p",bold}) => {

    const titleSize = (size==="h1")
        ? styles.h1
        : (size==="h2") 
        ? styles.h2
        : (size=="h4")
        ? styles.h4
        : styles.p
        
    return (
        <Text style={[styles.title,titleSize,bold ? styles.bold : null]}>{text}</Text>
    )
}

export default Title