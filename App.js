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

import * as itemsActions from './src/modules/items.actions';
import CardView from './src/modules/Components/CardView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        isLoading: true,
        refreshing: false
    };

    this._onRefresh = this._onRefresh.bind(this);
  }

  componentWillMount() {
    this._retrieveItems();
  }

  _retrieveItems(isRefreshed) {
    this.props.actions.retrieveItems()
      .then(() => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(this.props.companies),
            isLoading: false
        });
      }).catch(err => {
        console.log('retrieve items: Error:', err);
      });
    if (isRefreshed && this.setState({ refreshing: false }));
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this._retrieveItems('isRefreshed');
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ListView contentContainerStyle={{
          paddingTop: 30,
          margin: 5,
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={rowData => <CardView info = {rowData} /> }
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

App.propTypes = {
  actions: PropTypes.object.isRequired,
  companies: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

function mapStateToProps(state, ownProps) {
  return {
      companies: state.items.companies
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(itemsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
