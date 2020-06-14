import React, { useEffect, useContext } from 'react';
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import { Button, getScaledValue, usePop, StyleSheet } from 'renative';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Theme, { themeStyles, hasWebFocusableUI } from './theme';
import Title from './app/components/atoms/title'
import Subtitle from './app/components/atoms/subtitle'
import { GlobalContext } from './app/context/globalState'
import RoundButton from './app/components/atoms/roundButton'
import _ from 'lodash'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: getScaledValue(80),
        alignItems: 'flex-start',
        paddingTop: getScaledValue(20)
    },
    imageContainer:{
        flex:6,
        backgroundColor:"yellow"
    },
    infoContainer:{
        flex:2,
        backgroundColor:"blue"
    },
    icon:{
        left:16,
        color:"white",
        top:0,
        zIndex:10,
        position:'absolute'
    },
    playButtonContainer:{
        position:"absolute",
        top:-25,
        right:50
    },
    infoContainer:{
        paddingTop:32,
        paddingLeft:8,
        paddingRight:8
    },
    image:{
        width:"100%",
        height: getScaledValue(500),
    }

});

const ScreenModal = props => {

    const pop = usePop(props);

    const {  apiConfig, movieGenres } = useContext(GlobalContext)

    if (hasWebFocusableUI) {
        useEffect(() => {
            const { setFocus } = props;
            setFocus('close');

            return function cleanup() {
                setFocus('menu');
            };
        }, []);
    }

    function getGenres(){
        let genres = "-"
        if (!_.isEmpty(movieGenres) && props.route.params.hasOwnProperty("genre_ids") && props.route.params.genre_ids){
            genres = movieGenres.filter(genre=>props.route.params.genre_ids.indexOf(genre.id)>0)
            if (!_.isEmpty(genres)){
                return genres.map(genre=>genre.name).join(" - ")
            }
        }
        return " "
    }
      

    return (
        <SafeAreaView style={themeStyles.screenModal}>
            <ScrollView>
            
                <View >
                    <Image style={styles.image} source={{uri:`${apiConfig.images.base_url}original${props.route.params.poster_path}`}} />
                    <Button
                        style={styles.icon}
                        focusKey="close"
                        iconFont="ionicons"
                        iconName="md-arrow-back"
                        className="focusable"
                        iconColor={Theme.color3}
                        iconSize={Theme.iconSize}
                        to="/"
                        onEnterPress={() => {
                            pop();
                        }}
                        onPress={() => {
                            pop();
                        }}
                    />
                </View>
                <View >
                    <View style={styles.playButtonContainer}>
                        <RoundButton navigation={props.navigation} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Title text={props.route.params.title ? props.route.params.title : props.route.params.name ? props.route.params.name : ""} size={"h1"} bold  />
                        <Subtitle text={getGenres()} size={"sh3"} />
                        <Text style={{color:"white",paddingTop:8}}>{props.route.params.overview}</Text>
                    </View>

                    
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default (hasWebFocusableUI ? withFocusable()(ScreenModal) : ScreenModal);
