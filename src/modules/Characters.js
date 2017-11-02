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

import * as charactersActions from './characters.actions';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/Characters';
import CardView from './Components/CardView';

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => JSON.stringify(r1) !== JSON.stringify(r2) }),
      loading: true,
      refreshing: false,
      offset: 0
    };
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this._retrieveCharacters();
    Icon.getImageSource('md-arrow-back', 20).then((source) => 
      this.setState({ backIcon: source })
    );
  }

  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.getUpdateDataSource(props.characters),
    });
  }

  getUpdateDataSource(characters) {
    this.state.listData = this.state.listData.concat(characters);
    return this.state.dataSource.cloneWithRows(this.state.listData);
  }

  _retrieveCharacters(isRefreshed) {
    this.props.actions.retrieveCharacters(this.state.offset)
      .then(() => {
        this.setState({ loading: false });
      }).catch(err => {
        console.log('Characters-retrieveCharacters Error:', err);
      });
    if (isRefreshed && this.setState({ refreshing: false }));
  }

  _loadMoreContentAsync = async () => {
    this.setState({
      offset: this.state.offset += 30,
    });
    this.props.dispatch(this.props.actions.retrieveCharacters(this.state.offset));
  }

  _onRefresh() {
    this.setState({
      listData: [],
      refreshing: true
    });
    this._retrieveCharacters('isRefreshed');
  }

  _onNavigatorEvent(event) {
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
            icon: this.state.backIcon
          }
        ]
      }
    });
  }

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
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

Characters.propTypes = {
  actions: PropTypes.object.isRequired,
  characters: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

function mapStateToProps(state, ownProps) {
  return {
    characters: state.items.characters
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(charactersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
