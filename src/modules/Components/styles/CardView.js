import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    cardItem: {
        height:180,
        width: 110,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 5,
        borderRadius: 3
    },
    cardImage: {
        height: 150,
        width: 110,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    cardInfo: {
        paddingHorizontal: 1
    },
    cardText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '500',
    }
});

export default styles;