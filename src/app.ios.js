import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';

import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
    navBarTranslucent: true,
    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarTextColor: 'white',
    statusBarTextColorScheme: 'light'
};

export default class App extends Component {
	constructor(props) {
        super(props);
        this.startApp();
    }
    
    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'myapp.Characters',
                    title: 'Characters',
                    navigatorStyle
                }
            ]
        });
    }
}
