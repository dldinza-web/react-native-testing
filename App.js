/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text testID={'rectangleLengthText'}>Length</Text>
        <TextInput testID={'rectangleLengthInput'}
          placeholder='Insert length'
        />

        <Text testID={'rectangleWidthText'}>Width</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
