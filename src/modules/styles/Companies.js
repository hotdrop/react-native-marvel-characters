import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listView: {
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                paddingTop:70
            }
        }),
        margin: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    loading: {
        flex: 1, 
        paddingTop: 50
    }
});

export default styles;