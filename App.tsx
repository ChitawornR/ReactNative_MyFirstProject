import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import ModalExample from "./components/ModalExample";
import WeatherApp from "./components/WeatherApp";


const App = () => {
  return (
    <View>
      <WeatherApp/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
