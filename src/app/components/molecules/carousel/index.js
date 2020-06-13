import React , { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import Poster from '../poster'
import { GlobalContext } from '../../../context/globalState'
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
const Carousel = ({data,title="",subtitle=""}) =>{
    
    const {  apiConfig } = useContext(GlobalContext)

    return (
        <View style={styles.carouselContainer}>
            <View style={styles.titleSection}>
                <View >
                    <Title text={title} size={"h2"}/>
                    <Subtitle text={subtitle} size={"sh2"} />
                </View>
                <View>
                    <Title text={"MORE"}/>
                </View>
            </View>
            <View style={styles.carouselContainer}>
                <FlatList 
                    horizontal
                    initialNumToRender={3}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={data=>{
                        debugger
                        const { item } = data
                        return <Poster 
                                    title={item.title ? item.title : "Title"}
                                    subtitle={"Description"}
                                    baseURL={apiConfig.images ? apiConfig.images.base_url : "https://#"}
                                    posterSize={apiConfig.images ? apiConfig.images.poster_sizes[1] : "original"}
                                    posterPath={item.poster_path ? item.poster_path : "#.jpg"}/>
                    }}
                />
            </View>
        </View>
        
        
    )
}

export default Carousel