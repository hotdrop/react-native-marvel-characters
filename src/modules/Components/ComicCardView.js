// @flow
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/ComicsCardView';

import type { Comic } from '../../constants/types';

type Props = {
    comic: Comic,
    viewComic: Function
};

export default class ComicsCardView extends Component<Props> {
    render() {
        const { comic, viewComic } = this.props;
        return(
            <TouchableOpacity activeOpacity={0.7} onPress={viewComic.bind(this, comic)}>
                <View style={styles.container}>
                    <Image source={{uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`}} style={styles.image} />
                    <View style={styles.detailArea}>
                        <Text style={styles.text} numberOfLines={2}>
                            {comic.title}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}