import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TWebView from './TWebView';

class ToiletPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <TWebView url='http://sf.gg'></TWebView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ToiletPage;
