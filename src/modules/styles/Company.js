import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
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
        color: 'black',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
    },
    overview: {
        color: 'black',
        fontSize: 15,
        paddingTop: 20
    },
    contentArea: {
        flex: 1,
        marginTop: 20
    },
    tabText: {
        color: 'black',
        paddingTop: 10,
        fontSize: 12,
        fontWeight: 'bold'
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
		color: 'black',
		fontSize: 16,
		fontWeight: '500'
	},
	value: {
		color: 'black',
		fontSize: 14
	}
});

export default styles;