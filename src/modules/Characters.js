import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  ActivityIndicator, 
  ListView, 
  Text, 
  View,
  RefreshControl
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/Characters';
import * as charactersActions from './characters.actions';
import CardView from './Components/CardView';

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        loading: true,
        refreshing: false,
    };

    this._viewCharacter = this._viewCharacter.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this._retrieveCharacters();
    Icon.getImageSource('md-arrow-back', 20).then((source) => 
      this.setState({ backIcon: source })
    );
  }

  _retrieveCharacters(isRefreshed) {
    this.props.actions.retrieveCharacters()
      .then(() => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(this.props.characters),
            loading: false
        });
      }).catch(err => {
        console.log('retrieve characters: Error:', err);
      });
    if (isRefreshed && this.setState({ refreshing: false }));
  }

  _onRefresh() {
    this.setState({ refreshing: true });
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
      <ListView contentContainerStyle={styles.listView}
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={rowData => <CardView character = {rowData} viewCharacter = {this._viewCharacter} /> }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
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