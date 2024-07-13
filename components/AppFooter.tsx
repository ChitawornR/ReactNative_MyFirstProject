import { StyleSheet, View, Text } from "react-native";
import React from "react";

const AppFooter = (): React.JSX.Element => {
  const hello = "Hello TNI Footer";
  const hello2 = <Text>Hello JSX</Text>;
  const isLogin = true
  return (
    <View>
      <Text style={styles.myText}>
        {hello} {"\n"}Date: {new Date().toLocaleDateString()}
      </Text>
      {hello2}
      {isLogin && <Text>Welcome to iron</Text>}
      {
        isLogin === true
        ? <Text>Welcome Marry</Text>
        : <Text>Login fail</Text>
      }
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  myText: {
    color: "red",
  },
});
