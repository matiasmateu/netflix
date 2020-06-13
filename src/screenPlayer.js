import React, { useEffect, useContext } from 'react';
import { Text, SafeAreaView, ScrollView, Image, View, Dimensions } from 'react-native';
import { Button, getScaledValue, usePop, StyleSheet } from 'renative';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Theme, { themeStyles, hasWebFocusableUI } from './theme';
import Title from './app/components/atoms/title'
import Subtitle from './app/components/atoms/subtitle'
import image from '../platformAssets/runtime/avatarwide.jpeg'
import { GlobalContext } from './app/context/globalState'
import RoundButton from './app/components/atoms/roundButton'
import Video from 'react-native-video';
import bunnyVideo from '../platformAssets/runtime/big_buck_bunny.mp4'
import Orientation from 'react-native-orientation-locker';
import { dw,dh } from './app/components/constants'
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
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
      },
      video: {
        width: dh,
        height: dw,
        backgroundColor: 'black',
      },
      text: {
        marginTop: 30,
        marginHorizontal: 20,
        fontSize: 15,
        textAlign: 'justify',
      },

});

const ScreenPlayer = props => {

    
    
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

      
    useEffect(() => {
        Orientation.lockToLandscape()
        return () => {
          Orientation.unlockAllOrientations()
        };
      }, []);

    return (
        <SafeAreaView style={themeStyles.screenModal}>
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
            <Video
                source={bunnyVideo}
                style={styles.video}
                controls={true}
                resizeMode={'cover'}
            />
        </SafeAreaView>
    );
};

export default (hasWebFocusableUI ? withFocusable()(ScreenModal) : ScreenPlayer);
