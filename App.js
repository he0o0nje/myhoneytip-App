import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.textstyle}>헌제짱!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
  textcontainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "dotted",
  },
  textstyle: {
    color: "red",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
