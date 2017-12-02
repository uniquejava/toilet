import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ToiletPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>卫生间</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

export default ToiletPage;
