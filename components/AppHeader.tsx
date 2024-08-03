import { Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type AppHeaderProps = {
  name: string;
  msg: string;
};

const AppHeader = ({ name, msg }: AppHeaderProps) => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>Input your fullname : {name}</Text>
      <Text style={stylesPractice.subtitleText}>{msg}</Text>
    </View>
  );
};

export default AppHeader;
