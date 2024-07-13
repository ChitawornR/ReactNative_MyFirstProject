import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, FlatList } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

export default function App(): React.JSX.Element {
  const onClickMe = () => {
    Alert.alert("Title", "Hacking NASA completed...");
  };

  const users = [
    { id: 1001, name: "Phat" },
    { id: 1002, name: "Riew" },
    { id: 1003, name: "Ter" },
  ];

  return (
    <View style={styles.container}>
      <AppHeader title="This is Header" year={2018} />
      <AppHeader title="This is Header 2" />
      <Text>Hello React Native is Fun!!</Text>
      {users.map((user, index) => {
        return (
          <Text key={user.id}>
            No.{index + 1} ID:{user.id} Name:{user.name}
          </Text>
        );
      })}
      <Button
        title="Click Me"
        onPress={onClickMe}
        color="red"
        // onPress={() => {
        //   Alert.alert("Title", "Hacking NASA completed...");
        // }}
      />
      <AppFooter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
