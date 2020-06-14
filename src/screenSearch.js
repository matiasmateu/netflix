import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { themeStyles, hasWebFocusableUI } from './theme';
import { useNavigate } from 'renative'
import SearchItem from './app/components/molecules/searchItem'

const ScreenSearch = (props) => {
    
    return (<View style={themeStyles.screen}>
        <ScrollView contentContainerStyle={themeStyles.container}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
        </ScrollView>
    </View>)
}

export default (hasWebFocusableUI
    ? withFocusable()(ScreenSearch)
    : ScreenSearch);
