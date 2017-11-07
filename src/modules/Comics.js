import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ListView } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/characters';

export default class Comics extends React.Component {
    render() {
        return (
            <View>
                <Text>dummy</Text>
            </View>
        );
    }
}