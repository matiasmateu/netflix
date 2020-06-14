import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, Image, View, ScrollView, FlatList } from 'react-native';
import { Api, Button, getScaledValue, useNavigate, useOpenURL, StyleSheet } from 'renative';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Theme, { themeStyles, hasWebFocusableUI } from './theme';
import config from '../platformAssets/renative.runtime.json';
import packageJson from '../package.json';
import icon from '../platformAssets/runtime/logo.png';
import { GlobalContext } from './app/context/globalState';
import Featured from './app/components/molecules/featured'
import Carousel from './app/components/molecules/carousel'
import _ from 'lodash'

const styles = StyleSheet.create({
    appContainerScroll: {
        paddingTop: getScaledValue(50),
        flex: 1
    },
    image: {
        marginBottom: getScaledValue(30),
        width: getScaledValue(83),
        height: getScaledValue(97),
    },
    homeContainer:{
        
    }
});

const FocusableView = withFocusable()(View);

const ScreenHome = (props) => {
    const [bgColor, setBgColor] = useState(Theme.color1);

    const { 
        apiConfig,
        popularMovies,
        popularTvSeries,
        familyGenre,
        documentaryGenre,
        setPopularMovies, 
        setAPIConfig, 
        setDocumentaries, 
        setPopularTvSeries, 
        setFamilyMovies } = useContext(GlobalContext)

           

    const navigate = useNavigate(props);
    const openURL = useOpenURL();
    let scrollRef;
    let handleFocus;
    let handleUp;

    if (hasWebFocusableUI) {
        scrollRef = useRef(null);
        const { setFocus } = props;
        handleFocus = ({ y }) => {
            scrollRef.current.scrollTo({ y });
        };
        handleUp = (direction) => {
            if (direction === 'up') scrollRef.current.scrollTo({ y: 0 });
        };
        useEffect(() => function cleanup() {
            setFocus('menu');
            if (_.isEmpty(apiConfig)) setAPIConfig()
        if (_.isEmpty(popularMovies)) setPopularMovies()
        if (_.isEmpty(popularTvSeries)) setPopularTvSeries()
        if (_.isEmpty(familyGenre)) setFamilyMovies()
        if (_.isEmpty(documentaryGenre)) setDocumentaries()     
        }, []);
    }


    debugger
    
    return (
            <ScrollView style={themeStyles.screen}>
                {/* <Featured /> */}
                <Carousel data={popularMovies} title={"Popular Movies"} subtitle={"Descriptive Text"} navigation={props.navigation}/>
                <Carousel data={popularTvSeries} title={"Popular Tv Series"} subtitle={"Descriptive Text"} navigation={props.navigation}/>
                <Carousel data={familyGenre} title={"Family Movies"} subtitle={"Descriptive Text"} navigation={props.navigation}/>
                <Carousel data={documentaryGenre} title={"Documentaries"} subtitle={"Descriptive Text"} navigation={props.navigation}/>
            </ScrollView>
    );
};

export default hasWebFocusableUI ? withFocusable()(ScreenHome) : ScreenHome;
