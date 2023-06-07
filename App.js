import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}></View>
      <View style={styles.container2}>
        <View style={styles.inner1}></View>
        <View style={styles.inner2}>
          <View style={styles.content}>
            <Text>!!메롱!!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: "red",
  },
  container2: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "yellow",
  },
  inner1: {
    flex: 1,
    backgroundColor: "blue",
  },
  inner2: {
    flex: 4,
    //justifyContent: "flex-start",
    backgroundColor: "orange",
    alignItems: "flex-end",
  },
  content: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
});
