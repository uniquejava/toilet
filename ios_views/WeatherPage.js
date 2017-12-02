import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

class WeatherPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>天气</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

export default WeatherPage;
