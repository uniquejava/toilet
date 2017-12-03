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
        <TWebView url='http://localhost:63342/toilet/html/nearby.html?_ijt=5l8n36ecioqas8li3g84tqjto8'></TWebView>
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
