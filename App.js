import React from "react";
import { StyleSheet, Image, View } from "react-native";
import favicon from "./assets/favicon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={favicon} resizeMode={"repeat"} style={styles.imgstyle} />
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
  imgstyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
