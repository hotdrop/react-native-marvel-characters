// @flow
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles/ComicsCardView';

type Props = {
    comics: Object,
    viewComics: Function
};

export default class ComicsCardView extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
}