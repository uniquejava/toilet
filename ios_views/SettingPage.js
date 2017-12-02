import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class SettingPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>设置</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

export default SettingPage;
