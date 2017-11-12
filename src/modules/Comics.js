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

import * as actions from '../actions/comics';
import { icons } from '../constants/icons';
import styles from './styles/Comics';
import CardView from './Components/ComicCardView';

import type { Comic, RNNavigator, RNNavigatorEvent } from '../constants/types';

type Props = {
  actions: Object,
  comics: Array<Comic>,
  navigator: RNNavigator
};

type State = {
  listData: Array<Comic>,
  comics: Array<Comic>,
  dataSource: ListView.DataSource,
  loading: boolean,
  refreshing: boolean,
  offset: number
};

class Comics extends Component<Props, State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {
            listData: [],
            comics: [],
            dataSource: new ListView.DataSource({ rowHasChanged: (r1: Object, r2: Object) => 
                JSON.stringify(r1) !== JSON.stringify(r2) 
            }),
            loading: true,
            refreshing: false,
            offset: 0
        };
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }

    _onNavigatorEvent(event: RNNavigatorEvent) {
        if(event.id === 'bottomTabSelected') {
            const comics = this.state.listData;
            if(comics.length <= 0) {
                this._retrieveComics();
            }
        }
    }

    async _loadMoreContentAsync() {
        this._retrieveComics();
    }

    _onRefresh() {
        this.setState({
            listData: [],
            offset: 0,
            refreshing: true
        });
        this._retrieveComics(true);
    }

    _retrieveComics(isRefreshed: boolean = false) {
        this.props.actions.retrieveComics(this.state.offset)
            .then(() => { this.setState({ loading: false }); })
            .catch(err => { console.log('Comics-retrieveComics Error:', err); });
        
        const nextOffset = this.state.offset + 30;
        this.setState({ offset: nextOffset });
        if(isRefreshed && this.setState({ refreshing: false }));
    }

    componentWillReceiveProps(props: Props) {
        const comics = this.state.listData;
        const concatReceiveComics = comics.concat(props.comics);
        
        this.setState({
            listData: concatReceiveComics,
            dataSource: this.state.dataSource.cloneWithRows(concatReceiveComics)
        });
    }

    _viewComic(comic: Comic) {
        this.props.navigator.showModal({
            screen: 'myapp.Comic',
            passProps: {
                comic
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
                renderRow={rowData => <CardView comic = {rowData} viewComic = {this._viewComic.bind(this)} /> }
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
        // TODO このcomics.comicsは微妙なのであとで考える
        comics: state.comics.comics
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comics);