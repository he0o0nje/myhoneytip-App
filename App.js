import React from "react";
// import MainPage from "./pages/MainPage";
// import AboutPage from "./pages/AboutPage";
// import DetailPage from "./pages/DetailPage";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  console.disableYellowBox = true;

  return (
    <NavigationContainer>
      <StatusBar style="black" />
      <StackNavigator />
    </NavigationContainer>
  );

  //return <MainPage />;
  // return <AboutPage />;
  // return <DetailPage />;
}
