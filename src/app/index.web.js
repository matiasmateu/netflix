import React from 'react';
import { View } from 'react-native';
import { Router } from '@reach/router';
import { Api } from 'renative';
import { GlobalProvider } from './context/globalState'
import AppStateManager from './appStateManager'
import ScreenHome from '../screenHome';
import ScreenSearch from '../screenSearch';
import ScreenModal from '../screenModal';
import Menu from '../menu';
import { themeStyles } from '../theme';

if (Api.engine !== 'next') {
    // bootstrap fonts for web
    require('../../platformAssets/runtime/fontManager');
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        position: 'relative'
    }
};

const App = () => (
    <GlobalProvider>
        <AppStateManager>
            <View style={[themeStyles.app]}>
                <Menu focusKey="menu" />
                <View style={styles.container}>
                    <Router>
                        <ScreenHome path="/" />
                        <ScreenSearch path="search" />
                        <ScreenModal path="modal" />
                    </Router>
                </View>
            </View>
        </AppStateManager>
    </GlobalProvider>
);

export default App;
