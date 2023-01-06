import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <Welcome/>
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