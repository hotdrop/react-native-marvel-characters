// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ListView } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/characters';

type Props = {

}
type State = {
    
}

export default class Comics extends Component<Props, State> {
    render() {
        return (
            <View>
                <Text>dummy</Text>
            </View>
        );
    }
}