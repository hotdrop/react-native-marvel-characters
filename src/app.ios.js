import React from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { registerScreens } from './screens';
import { iconsMap, loadIcons } from './constants/icons';

const store = configureStore();

registerScreens(store, Provider);

export default class App extends React.Component {

	constructor(props) {
        super(props);
        loadIcons.then(() => {
            this.startApp();
        });
    }

    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Characters',
                    screen: 'myapp.Characters',
                    title: 'Mervel Characters',
                    icon: iconsMap['ios-people-outline'],
                    selectedIcon: iconsMap['ios-people'],
                    navigatorStyle
                },
                {
                    label: 'Comics',
                    screen: 'myapp.Comics',
                    title: 'Mervel Comics',
                    icon: iconsMap['ios-book-outline'],
                    selectedIcon: iconsMap['ios-book'],
                    navigatorStyle
                }
            ],
            tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'black'
			}
        });
    }
}

const navigatorStyle = {
    navBarTranslucent: true,
    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    statusBarTextColorScheme: 'light'
};
