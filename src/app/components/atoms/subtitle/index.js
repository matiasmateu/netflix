import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    title:{
        opacity:1,
        color:"white"
    },
    sh1:{
        fontSize:16
    },
    sp:{
        fontSize:16
    }
})

const Subtitle = ({text="",size="sp"}) => {

    const titleSize = (size==="sh1")
        ? styles.sh1
        : styles.sp
        
    return (
        <Text style={[styles.title,titleSize]}>{text}</Text>
    )
}

export default Subtitle