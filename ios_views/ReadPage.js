import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, NavigatorIOS } from 'react-native';
import Search from './read/Search';
import Topic from './read/Topic';
import Category from './read/Category';
import Recommend from './read/Recommend';

class Hr extends Component {
  render() {
    return (
      <View>
        <View style={styles.hr}></View>
      </View>
    );
  }
}

export default class ReadPage extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '阅读',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    )
      ;
  }
}

class MyScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Hr/>
        {
          this.state.isShow ?
            <ScrollView>
              <Topic/>
              <Hr/>
              <Recommend/>
              <Category/>
              <Recommend/>
            </ScrollView>
            :
            null
        }

      </View>
    );
  }


  componentDidMount() {
    this.setState({
      isShow: true
    });
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hr: {
    borderColor: '#F0F0F0',
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10
  }
});
