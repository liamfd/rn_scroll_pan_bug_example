/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  PanResponder
} from 'react-native';

export default class scrollPan extends Component {
  constructor(props){
    super(props);
    this.wrapperPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, g) => false,
      onPanResponderGrant: () => {
        console.log('GRANTED TO WRAPPER');
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('WRAPPER MOVED');
      }
    });

    this.scollerPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, g) => true,
      onPanResponderGrant: () => {
        console.log('GRANTED TO SCROLLER');
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('SCROLLER MOVED');
      }
    });
  }
  render() {
    return (
      <View style={styles.container} {...this.wrapperPanResponder.panHandlers}>
        <ScrollView onScroll={console.log('scrolled')} style={styles.scroll_view} {...this.scollerPanResponder.panHandlers}>
          <Text style={{fontSize:96}}>Scroll this</Text>
          <Text style={{fontSize:96}}>Scroll this</Text>
          <Text style={{fontSize:96}}>Scroll this</Text>
          <Text style={{fontSize:96}}>Scroll this</Text>
          <Text style={{fontSize:96}}>Scroll this</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scroll_view: {
    backgroundColor: 'teal',
    maxHeight: 350
  }
});

AppRegistry.registerComponent('scrollPan', () => scrollPan);
