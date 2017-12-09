import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight } from 'react-native';

import Util from '../util';
import TWebView from '../TWebView';

class Topic extends Component {
  constructor(props) {
    super(props);
    console.log('data----', props.data);
    this.state = {
      data: props.data,
      navigator: props.navigator
    };
  }

  showDetailPage(title, url) {
    this.state.navigator.push({
      component: TWebView,
      title: title,
      passProps: {
        url: url
      }
    });
  }

  render() {
    return (
      <View style={[styles.container, {paddingTop: 10}]}>
        <View>
          <Text style={styles.text1}>推荐专题</Text>
        </View>
        <View style={styles.images}>
          {
            this.state.data.map(d => {
              return (
                <TouchableHighlight
                  style={styles.image_item}
                  key={d.title}
                  onPress={() => {
                    this.showDetailPage(d.title, d.url);
                  }}>
                  <Image resizeMode='cover' style={styles.image}
                         source={{uri: d.img}}/>
                </TouchableHighlight>
              );
            })

          }
        </View>
        <View>
          <Text style={styles.text2}>查看更多同期专题&gt;</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  images: {
    flexDirection: 'row'
  },
  image_item: {
    flex: 1
  },
  image: {
    width: (Util.size.width - 30) / 2.0,
    height: 80,
    borderRadius: 5
  },
  text1: {
    color: '#5E5E5E',
    marginBottom: 6,
    fontSize: 16
  },
  text2: {
    color: '#ccc',
    marginTop: 6,
    fontWeight: '300'
  }
});

export default Topic;
