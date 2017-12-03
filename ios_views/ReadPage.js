import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
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


class ReadPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false
    };
  }

  render() {
    return (
      <View>
        <Search/>
        <Hr/>
        {
          this.state.isShow ?
            <ScrollView>
              <Topic/>
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
  text: {
    fontSize: 60
  },
  hr: {
    borderColor: '#F0F0F0',
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10
  }
});

export default ReadPage;
