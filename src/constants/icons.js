// @flow

import Ionicons from 'react-native-vector-icons/Ionicons';

const iconsDefine = {
    'ios-people': [30],
    'ios-people-outline': [30],
    'ios-book': [30],
    'ios-book-outline': [30],
    'md-arrow-back': [20]
};

export const icons: Object = {};
export const loadIcons = new Promise((resolve, reject) => {
    Promise.all(
        Object.keys(iconsDefine).map(name => 
            Ionicons.getImageSource(name, iconsDefine[name][0])
        )
    ).then(sources => {
        Object.keys(iconsDefine).forEach((name, index) => 
            icons[name] = sources[index]
        );
        resolve(true);
    });
});