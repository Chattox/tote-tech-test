import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import News from './src/components/News';

export default class App extends Component {
  render() {
    return <News />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });
