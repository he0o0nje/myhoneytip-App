import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image style={styles.mainImg} source={require("./assets/main.png")} />
      <ScrollView
        style={styles.ButtonContainer}
        horizontal
        indicatorStyle={"white"}
      >
        <TouchableOpacity style={styles.Button1}>
          <Text style={styles.ButtonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button2}>
          <Text style={styles.ButtonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button3}>
          <Text style={styles.ButtonText}>반려묘</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button4}>
          <Text style={styles.ButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            style={styles.cardImg}
            source={require("./assets/pizza.png")}
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
            <Text style={styles.cardDesc} numberOfLines={3}>
              먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수
              없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분
              30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이
              전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
            </Text>
            <Text style={styles.cardDate}>2023.06.23</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 50,
    marginLeft: 20,
  },
  mainImg: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  ButtonContainer: {
    marginTop: 20,
    marginLeft: 10,
    height: 60,
  },
  Button1: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "red",
    borderRadius: 15,
    margin: 7,
  },
  Button2: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 15,
    margin: 7,
  },
  Button3: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "yellow",
    borderRadius: 15,
    margin: 7,
  },
  Button4: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "green",
    borderRadius: 15,
    margin: 7,
  },
  ButtonText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  cardContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  cardImg: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: "#a6a6a6",
  },
});
