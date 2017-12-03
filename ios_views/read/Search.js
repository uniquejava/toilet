import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import Util from '../util';

class Search extends Component {
  render() {
    console.log(Util.pixel);
    console.log(StyleSheet.hairlineWidth);

    return (
      <View style={styles.container}>
        <TextInput style={styles.search} placeholder='search' placehoderTextColor='#5E6877'/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  search: {
    height: 35,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    paddingLeft: 5,
    marginTop: 20,
    borderRadius: 3
  }
});

export default Search;
