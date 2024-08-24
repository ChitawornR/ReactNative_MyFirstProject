import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";

const App = () => {
  return (
    <View>
      <WeatherBangkok/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
