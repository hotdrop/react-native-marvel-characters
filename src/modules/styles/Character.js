// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    backImage: {
        height: 225,
		backgroundColor: 'black'
    },
    linearGradient: {
		top: 0,
		left: 0,
		right: 0,
        height: 225,
        position: 'absolute'
	},
    itemContainer: {
        position: 'absolute',
        top: 10,
        right: 16,
        left: 16,
        flexDirection: 'row'
    },
    image: {
        height: 200,
        width: 150,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    titleArea: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 50,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
		fontSize: 22,
		fontWeight: '500',
		paddingTop: 10
    },
    contentArea: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 10
    },
    labelRow: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    labelColumn: {
        flexDirection: 'column',
        paddingTop: 10,
    },
	label: {
        backgroundColor: '#aaaaaa',
		color: 'black',
		fontSize: 16,
        fontWeight: '500'
    },
	description: {
        color: 'white',
        paddingTop: 10,
        paddingLeft: 10,
		fontSize: 14
    },
    available: {
        color: 'white',
        paddingLeft: 10,
        paddingTop: 5,
		fontSize: 14
    },
    comicsList: {
        color: '#F85AFE',
        paddingLeft: 10,
        fontSize: 14
    },
    seriesList: {
        color: '#008088',
        paddingLeft: 10,
        fontSize: 14
    },
    storiesList: {
        color: '#009922',
        paddingLeft: 10,
        fontSize: 14
    },
    eventsList: {
        color: '#AF69FD',
        paddingLeft: 10,
        fontSize: 14
    },
    urlLink: {
        color: '#2980b9',
        fontSize: 14
    },
    urlLinkText: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 10
    }
});
