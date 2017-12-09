import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Util from '../util';
import TWebView from '../TWebView';

class List extends Component {
  constructor(props) {
    super(props);
    console.log(props.url);

    this.state = {
      url: props.url,
      data: [],
      navigator: props.navigator
    };

  }

  componentDidMount() {
    let url = this.state.url;
    console.log('url=', url);

    Util.get(url, data => {
      console.log(data);
      if (data.status === 1) {
        this.setState({
          ...this.state,
          data: data.data
        });
      }
    }, function (err) {
      console.log(err);
    });
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

      <FlatList
        data={this.state.data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity key={item.id} onPress={()=>{this.showDetailPage(item.title, item.url)}}>
              <View style={styles.item}>
                <View>
                  <Image style={styles.image}
                         source={{uri: item.img}}></Image>
                </View>
                <View style={styles.text_wrapper}>
                  <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>

          );
        }}
      />

    );
  }
}

let styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 78,
    marginTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  text_wrapper: {
    flex: 1,
    marginLeft: 5
  },

  image: {
    height: 72,
    width: 72,
    borderRadius: 3
  },

  title: {
    fontSize: 16,
  },

  time: {
    color: '#DDD'
  }

});

export default List;
