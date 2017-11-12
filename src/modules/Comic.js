// @flow
import React, { Component } from 'react';
import { 
    ScrollView, 
    Image, 
    Text, 
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/Comic';

import type {
    Comic as TypeComic,
    RNNavigator,
    RNNavigatorEvent 
} from '../constants/types';

type Props = {
    comic: TypeComic,
    navigator: RNNavigator
}

export default class Comic extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }

    _onNavigatorEvent(event: RNNavigatorEvent) {
        if(event.type === 'NavBarButtonPress') {
            if(event.id === 'close') {
                this.props.navigator.dismissModal();
            }
        }
    }

    render() {
        const { comic } = this.props;
        return (
            <ScrollView style={styles.container}>
                <Image source={require('../../images/backcover.png')} style={styles.backImage} />
                <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} />
                <View style={styles.itemContainer}>
                    <Image source={{uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`}} style={styles.image} />
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>{comic.title}</Text>
                    </View>
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.labelColumn}>
                        <Text style={styles.label}>Information</Text>
                        <Text style={styles.info}>{comic.format}</Text>
                        <Text style={styles.info}>Page {comic.pageCount}</Text>
                        {comic.prices.map(price => (
                            <Text key={price.type} style={styles.info}>
                                {price.type}: $ {price.price}
                            </Text>
                        ))}
                    </View>
                    <View style={styles.labelColumn}>
                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.description}>
                            {comic.description}
                        </Text>
                    </View>
                    <View style={styles.labelColumn}>
                        <Text style={styles.label}>Creators</Text>
                        <Text style={styles.available}>[available: {comic.creators.available}]</Text>
                        {comic.creators.items.map(creator => (
                            <Text key={creator.resourceURI} style={styles.item}>
                                ・{creator.role}: {creator.name} 
                            </Text>
                        ))}
                    </View>
                    {/* images umm.. */}
                    {/* characters todo */}
                </View>
            </ScrollView>
        );
    }
}