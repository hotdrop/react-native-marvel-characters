import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderTabBar: true,
	navBarBackgroundColor: 'black',
	navBarTextColor: 'white',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',	
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'myapp.Companies',
		title: 'Main Screen',
		navigatorStyle
	}
});