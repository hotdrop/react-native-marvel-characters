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
            <View>
                <Text style={styles.title}>{comic.title}</Text>
            </View>
        )
    }
}