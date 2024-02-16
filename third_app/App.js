import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Counter } from './features/counter/Counter';
import { store } from './src/app/store'
import { Provider } from 'react-redux'



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Une petite application pour faire des additions et des soustractions</Text>
      <Provider store={store}>
        <Counter />
      </Provider>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
