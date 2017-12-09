import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Util from '../util';
import List from './List';

class Category extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      data: props.data,
      navigator: props.navigator
    };
    this.goToList.bind(this);

  }

  goToList(name) {
    let type = this.getType(name);
    let url = `http://localhost:3000/data/read?type=${type}`;

    this.state.navigator.push({
      component: List,
      title: name,
      barTintColor: '#FFF',
      passProps: {
        url: url
      }
    });
  }

  getType(name){
    let type = 'it';
    switch (name) {
      case '分类管理1':
        type = 'it';
        break;
      case '分类管理2':
        type = 'cookie';
        break;
      default:
        break;
    }
    return type;
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
                <TouchableOpacity style={styles.item} key={d.text} onPress={()=>{this.goToList(d.text)}}>
                  <Text style={styles.title}>{d.text}</Text>
                </TouchableOpacity>
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
