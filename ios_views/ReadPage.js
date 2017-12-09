import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, NavigatorIOS } from 'react-native';
import Search from './read/Search';
import Topic from './read/Topic';
import Category from './read/Category';
import Recommend from './read/Recommend';
import Util from './util';

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
              <Topic data={this.state.recommendTopic}/>
              <Hr/>
              <Recommend name="热门专题"/>
              <Hr/>
              <Category data={this.state.category} navigator={this.props.navigator}/>
              <Hr/>
              <Recommend name="清新一刻"/>
            </ScrollView>
            :
            null
        }

      </View>
    );
  }


  componentDidMount() {
    this.setState({
      isShow: false
    });
    var that = this;
    Util.get('http://localhost:3000/data/read?type=config', function (data) {
      console.log(data);

      if (data.status === 1) {
        let obj = data.data;
        let hotTopic = obj.hotTopic;
        let recommendTopic = obj.recommendTopic;
        let other = obj.other;
        let category = obj.category;


        console.log('recommendTopic=', recommendTopic);

        that.setState({
          isShow: true,
          recommendTopic: recommendTopic,
          category: category
        });
      } else {

      }
    }, function (err) {
      console.log(err);
    })
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
