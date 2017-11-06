import Ionicons from 'react-native-vector-icons/Ionicons';

const icons = {
    'ios-people': [30],
    'ios-people-outline': [30],
    'ios-book': [30],
    'ios-book-outline': [30],
    'md-arrow-back': [20]
};

export const iconsMap = {};
export const loadIcons = new Promise((resolve, reject) => {
    Promise.all(
        Object.keys(icons).map(name => Ionicons.getImageSource(name, icons[name][0]))
    ).then(sources => {
        Object.keys(icons).forEach((name, index) => (iconsMap[name] = sources[index]));
        resolve(true);
    });
});