import React, { Component } from 'react';
import { ActivityIndicator, ListView, ScrollView, Text, View } from 'react-native';
import axios from 'axios';

import CardView from './src/modules/Components/CardView';
import { MY_API_URL } from './src/constants/api'

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return axios.get(`${MY_API_URL}`, {
      params: {
        fromDateEpoch: 0
      }
    })
    .then(res => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(res.data),
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
