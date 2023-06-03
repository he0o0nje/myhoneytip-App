import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>메롱</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textcontainer: {
    height: 100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textstyle: {
    textAlign:"center"
  }
});
