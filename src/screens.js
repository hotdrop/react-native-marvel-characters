import { Navigation } from 'react-native-navigation';

import Characters from './modules/Characters';
import Character from './modules/Character';

export const registerScreens = (store, provider) => {
    Navigation.registerComponent('myapp.Characters', () => Characters, store, provider);
    Navigation.registerComponent('myapp.Character', () => Character, store, provider);
}