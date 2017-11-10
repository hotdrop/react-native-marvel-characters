import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

import { iconsMap } from '../constants/icons';
import styles from './styles/Characters';
import CardView from './Components/CardView';

// このObjectだらけの型定義なんて意味ないのでどうすればいいか調査する
type Props = {
  actions: Object,
  characters: Object,
  navigator: Function
}

type State = {
  listData: Array<Object>,
  characters: Array<Object>,
  dataSource: Object,
  loading: boolean,
  refreshing: boolean,
  offset: number
}

// これ至る所にあるのでまとめたほうがいい。意味的には同じなので集約するのは問題ない
type NavigatorEvent = {
  type: string,
  id: string
}

class Characters extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      listData: [],
      characters: [],
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2) }),
      loading: true,
      refreshing: false,
      offset: 0
    };
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this._retrieveCharacters('');
  }

  _retrieveCharacters(isRefreshed: string) {
    this.props.actions.retrieveCharacters(this.state.offset)
      .then(() => {
        this.setState({ loading: false });
      }).catch(err => {
        console.log('Characters-retrieveCharacters Error:', err);
      });
    if (isRefreshed && this.setState({ refreshing: false }));
  }

  componentWillReceiveProps(props: Props) {
    this.setState({ 
      dataSource: this._getUpdateDataSource(props.characters)
    });
  }

  // charaterはObjectにしているが、ちゃんとCharacterで定義する。
  _getUpdateDataSource(characters: Object) {
    this.state.listData = this.state.listData.concat(characters);  
    return this.state.dataSource.cloneWithRows(this.state.listData);
  }

  async _loadMoreContentAsync() {
    this.state.offset += 30;
    this._retrieveCharacters('');
  }

  _onRefresh() {
    this.setState({
      listData: [],
      offset: 0,
      refreshing: true
    });
    this._retrieveCharacters('isRefreshed');
  }

  _onNavigatorEvent(event: NavigatorEvent) {
		if (event.type === 'NavBarButtonPress') {
			if (event.id === 'close') {
				this.props.navigator.dismissModal();
			}
		}
  }
  
  _viewCharacter(character) {
    this.props.navigator.showModal({
      screen: 'myapp.Character',
      passProps: {
        character
      },
      backButtonHidden: true,
      navigatorButtons: {
        leftButtons: [
          {
            id: 'close',
            icon: iconsMap['md-arrow-back']
          }
        ]
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

// このstateはStoreで保持しているstateでReducerの実行結果となる。
// 型定義はStoreで持つべき？型定義.jsを作るべき？
const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters
  };
}

// このDispatchはActionを兼ねたもので、ActionのDispatchと同等。
const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
