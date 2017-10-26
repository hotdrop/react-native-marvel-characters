import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    cardInfo: {
        height:200,
        width: 120,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginRight: 10,
        borderRadius: 3
    },
    cardImage: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    cardInfo: {
        color: 'black',
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 1
    }
});

export default styles;