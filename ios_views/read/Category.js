import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Util from '../util';
import List from './List';

class Category extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>分类</Text>
        </View>

        <View style={styles.items}>
          {
            this.state.data.map(d => {
              return (
                <View style={styles.item} key={d.text}>
                  <Text style={styles.title}>{d.text}</Text>
                </View>
              );
            })
          }
        </View>

      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  title: {
    fontSize: 17,
    fontWeight: '400',
    color: '#707070'
  },

  text1: {
    color: '#5E5E5E',
    marginBottom: 6,
    fontSize: 16
  },

  items: {
    height: 170,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },

  item: {
    width: (Util.size.width - 30) / 2,
    height: 80,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default Category;
