import React, { useEffect, useContext } from 'react';
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import { Button, getScaledValue, usePop, StyleSheet } from 'renative';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Theme, { themeStyles, hasWebFocusableUI } from './theme';
import Title from './app/components/atoms/title'
import Subtitle from './app/components/atoms/subtitle'
import image from '../platformAssets/runtime/avatarwide.jpeg'
import { GlobalContext } from './app/context/globalState'
import RoundButton from './app/components/atoms/roundButton'

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
    }

});

const ScreenModal = props => {

    const pop = usePop(props);

    const {  apiConfig } = useContext(GlobalContext)

    if (hasWebFocusableUI) {
        useEffect(() => {
            const { setFocus } = props;
            setFocus('close');

            return function cleanup() {
                setFocus('menu');
            };
        }, []);
    }

    debugger

    return (
        <SafeAreaView style={themeStyles.screenModal}>
            <View style={{flex:1}}>
                <View style={{flex:6}}>
                    
                    <Image style={{width:"100%",height:"100%"}} source={{uri:`${apiConfig.images.base_url}original${props.route.params.poster_path}`}} />
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
                <View style={{flex:2}}>
                    <Title text={props.route.params.title ? props.route.params.title : props.route.params.name ? props.route.params.name : ""} size={"h1"} bold  />
                    <Subtitle text={"Subtitle"} size={"sh1"} />
                    <RoundButton navigation={props.navigation} />
                    <Text style={{color:"white",paddingTop:8}}>{props.route.params.overview}</Text>
                </View>
            </View>
            
        </SafeAreaView>
    );
};

export default (hasWebFocusableUI ? withFocusable()(ScreenModal) : ScreenModal);
