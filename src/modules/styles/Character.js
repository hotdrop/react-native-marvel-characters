import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    itemContainer: {
        flex: 1,
        top: 20,
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
        flex: 1,
        marginTop: 20
    },
    contentContainer: {
		paddingTop: 30,
		paddingHorizontal: 16,
        paddingBottom: 25
    },
    labelRow: {
		flexDirection: 'column',
        paddingTop: 10,
	},
	label: {
        backgroundColor: '#aaaaaa',
		color: 'black',
		fontSize: 16,
		fontWeight: '500'
	},
	value: {
        color: 'white',
        paddingTop: 10,
		fontSize: 14
    },
    urlLink: {
        color: '#2980b9',
        fontSize: 20
    },
    urlLinkText: {
        fontSize: 15
    }
});

export default styles;