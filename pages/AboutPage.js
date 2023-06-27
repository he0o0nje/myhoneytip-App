import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HI! 내가 바로 신헌제.</Text>
      <View style={styles.textcontainer}>
        <Image
          style={styles.aboutimg}
          source={require("../assets/about.png")}
          resizeMode="cover"
        />
        <Text>하이 에브리원 마이네임 이즈 헌제신</Text>
        <Text>웰컴투 마이 인스타그램</Text>
        <TouchableOpacity>
          <Text>He0o0nje</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F266A",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    paddingLeft: 30,
    paddingTop: 100,
    paddingRight: 30,
  },
  textcontainer: {
    width: 300,
    height: 500,
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutimg: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
});
