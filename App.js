import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function App() {
  const customAlert = () => {
    Alert.alert("TouchableOpacity에도 onPress 속성이 있습니다")
  }
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textcontainer} onpress={customAlert}>
      <Text style={styles.textstyle}>메롱</Text>
      </TouchableOpacity>
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
