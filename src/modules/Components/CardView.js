import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles/CardView';

class CardView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { character, viewCharacter } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={viewCharacter.bind(this, character)}>
                <View style={styles.cardItem}>
                    <Image source={require('../../../images/sample.png')} style={styles.cardImage} />
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardText} numberOfLines={2}>
                            {character.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CardView;