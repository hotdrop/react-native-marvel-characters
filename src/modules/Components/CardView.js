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
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.cardItem}>
                    <Image source={require('../../../images/coffee.png')} style={styles.cardImage} />
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardText} numberOfLines={3}>
                            {info.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CardView;