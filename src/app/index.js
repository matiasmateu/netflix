import React from 'react';
import { StyleSheet, StatusBar,Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CastButton } from 'react-native-google-cast';
import { getScaledValue } from 'renative';
import ScreenHome from '../screenHome';
import ScreenMyPage from '../screenMyPage';
import ScreenModal from '../screenModal';
import Menu, { DrawerButton } from '../menu';
import Theme from '../theme';
import { GlobalProvider } from './context/globalState'
import AppStateManager from './appStateManager'
import SearchBar from '../app/components/molecules/searchBar'

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    headerTitle: {
        color: Theme.color3,
        fontFamily: Theme.primaryFontFamily,
        fontSize: getScaledValue(18)
    },
    header: {
        backgroundColor: Theme.color1,
        borderBottomWidth: 0,
        height: getScaledValue(70)
        
    }
});

const StackNavigator = ({ navigation }) => (
    <Stack.Navigator
        screenOptions={{
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.header,
            headerTintColor: Theme.color3
        }}
        
    >
        <Stack.Screen
            name="home"
            component={ScreenHome}
            options={{
                headerTitle: props => <SearchBar />
            }}
        />
        <Stack.Screen name="my-page" component={ScreenMyPage} />
    </Stack.Navigator>
);

const ModalNavigator = () => (
    <ModalStack.Navigator headerMode="none" mode="modal">
        <ModalStack.Screen name="stack" component={StackNavigator} />
        <ModalStack.Screen  name="modal" component={ScreenModal} />
    </ModalStack.Navigator>
);

const App = () => {
    React.useEffect(() => {
        StatusBar.setBarStyle(Theme.statusBar);
    }, []);
    return (
        <GlobalProvider>
            <AppStateManager>
                <NavigationContainer>
                    <Drawer.Navigator drawerContent={Menu}>
                        <Drawer.Screen name="drawer" component={ModalNavigator} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </AppStateManager>
        </GlobalProvider>
    );
};

export default App;
