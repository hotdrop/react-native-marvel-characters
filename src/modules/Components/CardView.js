import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles/CardView';

class CardView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { info } = this.props;
        return (
            <View style={styles.cardItem}>
                <Image source={require('../../../images/coffee.png')} style={styles.cardImage} />
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle} numberOfLines={2}>
                        {info}
                    </Text>
                </View>
            </View>
        );
    }
}

export default CardView;