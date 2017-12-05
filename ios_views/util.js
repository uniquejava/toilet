import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, PixelRatio } from 'react-native';

module.exports = {
  size: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  pixel: 1 / PixelRatio.get(),
  get: function (url, cb, errorCb) {
    fetch(url).then(res => res.json()).then(resJson => cb(resJson)).catch(error => errorCb(error));
  }
};