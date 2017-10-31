import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    backImage: {
        height: 236,
		backgroundColor: 'black'
    },
    linearGradient: {
		top: 0,
		left: 0,
		right: 0,
        height: 236,
        position: 'absolute'
	},
    itemContainer: {
        position: 'absolute',
        top: 30,
        right: 16,
        left: 16,
        flexDirection: 'row'
    },
    image: {
        height: 150,
        width: 110,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    titleArea: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 50
    },
    title: {
        color: 'white',
		fontSize: 22,
		fontWeight: '500',
		paddingTop: 10
    },
    contentArea: {
        flex: 1
    },
    contentContainer: {
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

export default styles;