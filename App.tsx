import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./components/CreatePostScreen";

const HomeStack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerTitleAlign: "center",
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomePage" }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title:'About Us',
          // headerStyle:{backgroundColor:'#20b2aa'},
          // headerTintColor:'white',
          // headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign:'center'
          }}
        />
        <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
