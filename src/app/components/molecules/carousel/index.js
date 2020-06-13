import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import Poster from '../poster'

const styles = StyleSheet.create({
    carouselContainer:{
        paddingTop:16
    },
    titleSection:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:16,
        paddingLeft:16,
        paddingRight:24
    },
    carouselContainer:{
        flex:1
    }

})
const Carousel = () =>{
    return (
        <View style={styles.carouselContainer}>
            <View style={styles.titleSection}>
                <View >
                    <Title text={"Category"} size={"h2"}/>
                    <Subtitle text={"Descriptive Text"} size={"sh2"} />
                </View>
                <View>
                    <Title text={"MORE"}/>
                </View>
            </View>
            <View style={styles.carouselContainer}>
                <FlatList 
                    horizontal
                    initialNumToRender={3}
                    data={[{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15}]}
                    keyExtractor={item => item.id}
                    renderItem={item=><Poster />}
                />
            </View>
        </View>
        
        
    )
}

export default Carousel