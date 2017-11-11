// @flow
import { Navigation } from 'react-native-navigation';

import Characters from './modules/Characters';
import Character from './modules/Character';
import Comics from './modules/Comics';
import Comic from './modules/Comic';

import type { Provider } from 'react-redux';
import type { Store } from 'redux';

export default (store: Store<*, *>, provider: Provider<*, *>) => {
    Navigation.registerComponent('myapp.Characters', () => Characters, store, provider);
    Navigation.registerComponent('myapp.Character', () => Character, store, provider);
    Navigation.registerComponent('myapp.Comics', () => Comics, store, provider);
    Navigation.registerComponent('myapp.Comic', () => Comic, store, provider);
}