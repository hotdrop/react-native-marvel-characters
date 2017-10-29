import { Navigation } from 'react-native-navigation';

import Companies from './modules/Companies';

export function registerScreens(store, provider) {
    Navigation.registerComponent('myapp.Companies', () => Companies, store, provider);
}