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
import styles from './styles/Companies';
import * as itemsActions from './items.actions';
import CardView from './Components/CardView';

class Companies extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        isLoading: true,
        refreshing: false,
    };

    this._viewCompany = this._viewCompany.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this._retrieveItems();
    Icon.getImageSource('md-arrow-back', 20).then((source) => 
      this.setState({ backIcon: source })
    );
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

  _onNavigatorEvent(event) {
		if (event.type === 'NavBarButtonPress') {
			if (event.id === 'close') {
				this.props.navigator.dismissModal();
			}
		}
  }
  
  _viewCompany(company) {
    this.props.navigator.showModal({
      screen: 'myapp.Company',
      passProps: {
        company
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
    if(this.state.isLoading) {
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
        renderRow={rowData => <CardView company = {rowData} viewCompany={this._viewCompany} /> }
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

Companies.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Companies);
