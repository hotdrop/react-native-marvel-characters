// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 180,
        width: 160,
        backgroundColor: '#FEF099',
        flexDirection: 'column',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 5,
        borderRadius: 3
    },
    image: {
        height:150,
        width: 160,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    detailArea: {
        paddingHorizontal: 1
    },
    text: {
        color: 'black',
        fontSize: 12,
        fontWeight: '500',
    }
})