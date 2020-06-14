import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    title:{
        paddingTop:5,
        opacity:1,
        color:"white"
    },
    sh1:{
        fontSize:20
    },
    sh2:{
        fontSize:14
    },
    sh3:{
        fontSize:12
    },
    sh4:{
        fontSize:14
    },
    sh5:{
        fontSize:12
    },
    sh6:{
        fontSize:10
    },
    sp:{
        fontSize:16
    }
})

const Subtitle = ({text="",size="sp"}) => {

    const titleSize = (size==="sh1")
        ? styles.sh1
        : (size==="sh2")
        ? styles.sh2
        : (size=="sh4")
        ? styles.sh4
        : styles.sp
        
    return (
        <Text style={[styles.title,titleSize]}>{text}</Text>
    )
}

export default Subtitle