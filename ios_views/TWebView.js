import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';

class TWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    };
    this.showError.bind(this);
  }

  render() {
    return (

      <View style={styles.container}>
        {this.state.isError ?
          <View style={styles.errorView}>
            <Text style={{fontSize: 16, fontWeight: '300'}}>
            网络有问题, 请检查网络情况, 再刷新
            </Text>
          </View>
          :
          <WebView source={{uri: this.props.url}}
                   startInLoadingState={true}
                   onError={() => this.showError()}
                   style={{marginTop: -50, marginBottom: -50}}></WebView>
        }

      </View>
    );
  }

  showError() {
    console.log('show Error');
    this.setState({isError: true});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

TWebView.propTypes = {};

export default TWebView;
