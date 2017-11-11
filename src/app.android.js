import React from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import registerScreens from './screens';
import { icons, loadIcons } from './constants/icons';

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
					icon: icons['ios-people-outline'],
					selectedIcon: icons['ios-people'],
					navigatorStyle
				},
				{
					label: 'Comics',
					screen: 'myapp.Comics',
					title: 'Mervel Comics',
					icon: icons['ios-book-outline'],
					selectedIcon: icons['ios-book'],
					navigatorStyle
				}
			],
			appStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'black'
			}
		});
	}
}

const navigatorStyle = {
	navBarBackgroundColor: 'black',
	navBarTranslucent: false,
	drawUnderNavBar: true,
	drawUnderTabBar: true,
	navBarTextColor: 'white',
	navBarTitleTextCentered: true,
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	statusBarColor: 'black'
};