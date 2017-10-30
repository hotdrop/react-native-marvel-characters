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
    overviewArea: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20
    },
    title: {
        color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
    },
    overview: {
        color: 'white',
        fontSize: 15,
        paddingTop: 20
    },
    contentArea: {
        flex: 1,
        marginTop: 20
    },
    tabText: {
        color: 'white',
        paddingTop: 10,
        fontSize: 12,
        fontWeight: 'bold'
    },
    underline: {
        backgroundColor: '#FFFF00'
    },
    tabBar: {
        backgroundColor: 'white'
    },
    contentContainer: {
		paddingTop: 20,
		paddingHorizontal: 16,
        paddingBottom: 25
    },
    labelRow: {
		flexDirection: 'column',
		paddingTop: 10
	},
	label: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
	value: {
		color: 'white',
		fontSize: 14
	}
});

export default styles;