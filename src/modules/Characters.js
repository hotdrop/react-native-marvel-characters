// @flow

import React, { Component } from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    ListView,
    RefreshControl
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/characters';
import { icons } from '../constants/icons';
import styles from './styles/Characters';
import CardView from './Components/CharacterCardView';

import type { Character, RNNavigator, RNNavigatorEvent } from '../constants/types';

type Props = {
    actions: Object,
    characters: Array<Character>,
    navigator: RNNavigator
}

type State = {
    listData: Array<Character>,
    characters: Array<Character>,
     dataSource: ListView.DataSource,
     loading: boolean,
     refreshing: boolean,
     offset: number
}

class Characters extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            listData: [],
            characters: [],
            dataSource: new ListView.DataSource({ rowHasChanged: (r1: Object, r2: Object) => 
                JSON.stringify(r1) !== JSON.stringify(r2) 
            }),
            loading: true,
            refreshing: false,
            offset: 0
        };
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }

    componentWillMount() {
        this._retrieveCharacters();
    }

    async _loadMoreContentAsync() {
        this._retrieveCharacters();
    }

    _onRefresh() {
        this.setState({
            listData: [],
            offset: 0,
            refreshing: true
        });
        this._retrieveCharacters(true);
    }

    _retrieveCharacters(isRefreshed: boolean = false) {
        this.props.actions.retrieveCharacters(this.state.offset)
            .then(() => { this.setState({ loading: false }); })
            .catch(err => { console.log('retrieveCharacters Error:', err); });

        const nextOffset = this.state.offset + 30;
        this.setState({ offset: nextOffset });
        if(isRefreshed && this.setState({ refreshing: false }));
    }

    componentWillReceiveProps(props: Props) {
        const characters = this.state.listData;
        const concatReceiveCharacters = characters.concat(props.characters);
        
        this.setState({ 
            listData: concatReceiveCharacters,
            dataSource: this.state.dataSource.cloneWithRows(concatReceiveCharacters),
        });
    }

    _onNavigatorEvent(event: RNNavigatorEvent) {
        if(event.type === 'NavBarButtonPress') {
            if(event.id === 'close') {
                this.props.navigator.dismissModal();
            }
        }
    }
    
    _viewCharacter(character: Character) {
        this.props.navigator.showModal({
            screen: 'myapp.Character',
            passProps: {
                character
            },
            backButtonHidden: true,
            navigatorButtons: {
                leftButtons: [{
                    id: 'close',
                    icon: icons['md-arrow-back']
                }]
            }
        });
    }

    render() {
        if(this.state.loading) {
            return (<View style={styles.loading}><ActivityIndicator /></View>);
        }
        return (
            <ListView 
                contentContainerStyle={styles.listView}
                renderScrollComponent={props => <InfiniteScrollView {...props} />}
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={rowData => <CardView character = {rowData} viewCharacter = {this._viewCharacter.bind(this)} /> }
                canLoadMore={this.state.offset <= 360}
                distanceToLoadMore={10}
                onLoadMoreAsync={this._loadMoreContentAsync.bind(this)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        title="loading..."
                    />
                }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters.characters
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
