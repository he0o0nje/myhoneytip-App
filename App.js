import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer1}></View>
      <View style={styles.subcontainer2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subcontainer1: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  subcontainer2: {
    flex: 1,
    backgroundColor: 'green',
  }
});
