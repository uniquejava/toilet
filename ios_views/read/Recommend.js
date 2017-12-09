import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Util from '../util';

const imageUrl = 'http://vignette4.wikia.nocookie.net/awesomeanimeandmanga/images/3/34/K-on!-avatar-200x200.jpg/revision/latest?cb=20110517050049';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  render() {
    let views1 = [];
    let views2 = [];
    for (var i = 0; i < 8; i++) {
      let view = (
        <View style={[styles.image_item]} key={i}>
          <Image resizeMode="cover" style={[styles.image, styles.shadow]} source={{uri: imageUrl}}/>
          <Text style={styles.title} numberOfLines={2}>标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一</Text>
        </View>
      );

      if (i < 4) {
        views1.push(view);
      } else {
        views2.push(view);
      }
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.text1, styles.title_top]}>{this.state.name}</Text>
        </View>
        <View style={styles.images}>
          {views1}
        </View>
        <View style={styles.images}>
          {views2}
        </View>
        <View></View>
      </View>
    );
  }
}

console.log('Util.size.width=', Util.size.width);

let styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  images: {
    flexDirection: 'row',
  },
  image_item: {
    flex: 1,
    height: 157,
  },
  image: {
    height: 120,
    width: (Util.size.width - 40) / 4,
  },
  shadow: {
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset: {width: StyleSheet.hairlineWidth, height: StyleSheet.hairlineWidth}
  },
  text1: {
    color: '#5E5E5E',
    marginBottom: 6,
    fontSize: 16
  },
  title_top: {
    marginTop: 10
  },
  title: {
    marginTop: 4,
    fontSize: 13,
    color: '#818181'
  }
});

export default Recommend;
