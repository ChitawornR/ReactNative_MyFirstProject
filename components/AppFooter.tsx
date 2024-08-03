import { Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type AppFooterProps = {
  title:string;
}

const AppFooter = ({title}:AppFooterProps) => {
  return (
    <View style={stylesPractice.footer}>
      <Text style={stylesPractice.footerText}>{title}</Text>
    </View>
  );
};

export default AppFooter;
