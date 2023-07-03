import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";

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
        headerTitleAlign: "left",
        headerTintColor: "#000",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
