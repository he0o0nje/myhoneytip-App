import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import data from "../data.json";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function MainPage() {
  const [state, setState] = useState([]);
  const [CateState, setCateState] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(data.tip);
      setCateState(data.tip);
      setReady(false);
    }, 1000);
  }, []);

  const category = (cate) => {
    if (cate == "전체보기") {
      setCateState(state);
    } else {
      setCateState(
        state.filter((d) => {
          return d.category == cate;
        })
      );
    }
  };

  // let tip = state.tip;
  let todayWeather = 10 + 17;
  let todatCondition = "흐림";

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Text style={styles.weather}>
        오늘의 날씨: {todayWeather + "°C " + todatCondition}
      </Text>
      <Image style={styles.mainImg} source={require("../assets/main.png")} />
      <ScrollView
        style={styles.ButtonContainer}
        horizontal
        indicatorStyle={"white"}
      >
        <TouchableOpacity
          style={styles.ButtonAll}
          onPress={() => {
            category("전체보기");
          }}
        >
          <Text style={styles.ButtonText}>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button1}
          onPress={() => {
            category("생활");
          }}
        >
          <Text style={styles.ButtonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button2}
          onPress={() => {
            category("재테크");
          }}
        >
          <Text style={styles.ButtonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button3}
          onPress={() => {
            category("반려견");
          }}
        >
          <Text style={styles.ButtonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button4}
          onPress={() => {
            category("꿀팁 찜");
          }}
        >
          <Text style={styles.ButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {CateState.map((content, i) => {
          // return (
          //   <View style={styles.card} key={i}>
          //     <Image style={styles.cardImg} source={{ uri: content.image }} />
          //     <View style={styles.cardText}>
          //       <Text style={styles.cardTitle} numberOfLines={1}>
          //         {content.title}
          //       </Text>
          //       <Text style={styles.cardDesc} numberOfLines={3}>
          //         {content.desc}
          //       </Text>
          //       <Text style={styles.cardDate}>{content.date}</Text>
          //     </View>
          //   </View>
          //)
          return <Card content={content} key={i} />;
        })}
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
  weather: {
    alignSelf: "flex-end",
    paddingRight: 20,
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
  ButtonAll: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#20b2aa",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  Button1: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  Button2: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fe8d6f",
    borderRadius: 15,
    margin: 7,
  },
  Button3: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9adbc5",
    borderRadius: 15,
    margin: 7,
  },
  Button4: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#f886a8",
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
