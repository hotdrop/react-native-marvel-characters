import React, { Component } from 'react';
import { 
  ActivityIndicator, 
  ListView, 
  Text, 
  View 
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
        companies: {
            results: []
        }
    }
  }

  componentDidMount() {
    this._retrieveItems();
  }

  _retrieveItems() {
    this.props.actions.retrieveItems()
      .then(() => {
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          const dataSource = ds.cloneWithRows(this.props.companies.results);
          this.setState({
              companies: this.props.companies,
              dataSource,
              isLoading: false
          });
      });
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
        dataSource={this.state.dataSource}
        renderRow={ (rowData) => <CardView info = {rowData} /> }
      />
    );
  }
}

MyItems.propTypes = {
  actions: propTypes.object.isRequired,
  companies: propTypes.object.isRequired
}

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
