import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
      <Text style={styles.textstyle}>버튼인디용</Text>
      <Button
        style={styles.buttonstyle}
        title="버튼"
        color="#f194ff"
        onPress={function(){
          Alert.alert('팝업 알람!')
        }}
        />
        <Button
        style={styles.buttonstyle}
        title="버튼"
        color="#ff0000"
        onPress={()=>{
          Alert.alert('팝업 알람!')
        }}
        />
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
    margin:10,
  },
  textstyle: {
    textAlign:"center"
  }
});
