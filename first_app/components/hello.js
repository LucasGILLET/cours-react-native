import React from 'react';
import { Text, View } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text>Bonjour {this.props.username}</Text>
      </View>
    );
  }
}