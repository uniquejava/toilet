import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ReadPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>阅读</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

export default ReadPage;
