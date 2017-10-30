import { Navigation } from 'react-native-navigation';

import Companies from './modules/Companies';
import Company from './modules/Company';

export function registerScreens(store, provider) {
    Navigation.registerComponent('myapp.Companies', () => Companies, store, provider);
    Navigation.registerComponent('myapp.Company', () => Company, store, provider);
}