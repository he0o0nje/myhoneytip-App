import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import AboutPage from "../pages/AboutPage";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
          borderBottomColor: "white",
          shadowColor: "white",
          height: 100,
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
        headerTitleAlign: "left",
        headerTintColor: "#000",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="AboutPage" component={AboutPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
