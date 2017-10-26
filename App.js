import React, { Component } from 'react';
import { ActivityIndicator, ListView, ScrollView, Text, View } from 'react-native';

import CardView from './src/modules/Components/CardView';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
          //dataSource: responseJson.movies,
        }, function() { 
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
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
      <ListView style={{flex: 1, paddingTop: 20}}
        dataSource={this.state.dataSource}
        renderRow={ (rowData) => <CardView info = {rowData} /> }
      />
    );
  }

  _renderRow() {
    return (
      <View style={
          {
            justifyContent: 'center',
            alignItems: 'center',
          }
        }>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.state.dataSource.map(rowData => (
            <CardView info={rowData} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
