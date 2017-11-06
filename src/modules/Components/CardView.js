// @flow
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles/CardView';

type Props = {
    character: Object,
    viewCharacter: Function
};

class CardView extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { character, viewCharacter } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={viewCharacter.bind(this, character)}>
                <View style={styles.cardItem}>
                    <Image source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}`}} style={styles.cardImage} />
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