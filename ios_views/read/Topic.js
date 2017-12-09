import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import Util from '../util';

class Topic extends Component {
  constructor(props) {
    super(props);
    console.log('data----', props.data);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <View style={[styles.container, {paddingTop: 10}]}>
        <View>
          <Text style={styles.text1}>推荐专题</Text>
        </View>
        <View style={styles.images}>
          <View style={styles.image_item}>
            <Image resizeMode='cover' style={styles.image}
                   source={{uri: 'http://vignette4.wikia.nocookie.net/awesomeanimeandmanga/images/3/34/K-on!-avatar-200x200.jpg/revision/latest?cb=20110517050049'}}/>
          </View>
          <View style={styles.image_item}>
            <Image resizeMode='cover' style={styles.image}
                   source={{uri: 'http://www.epn-grandangouleme.fr/images/lang/fr/orki/Image/logos_libre_proprietaire/thunderbird.jpg'}}/>
          </View>
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
