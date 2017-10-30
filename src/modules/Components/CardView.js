import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles/CardView';

class CardView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { company, viewCompany } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={viewCompany.bind(this, company)}>
                <View style={styles.cardItem}>
                    <Image source={require('../../../images/coffee.png')} style={styles.cardImage} />
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardText} numberOfLines={3}>
                            {company.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CardView;