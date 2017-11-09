// @flow
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles/CardView';

type Props = {
    character: Object,
    viewCharacter: Function
};

export default class CardView extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { character, viewCharacter } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={viewCharacter.bind(this, character)}>
                <View style={styles.container}>
                    <Image source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}`}} style={styles.image} />
                    <View style={styles.detailArea}>
                        <Text style={styles.text} numberOfLines={2}>
                            {character.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}