import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class List extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View>
          <Image source={{uri: ''}}></Image>
        </View>
        <View>
          <Text>这是标题</Text>
          <Text>2017-12-05</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  item: {
    height: 78,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default List;
