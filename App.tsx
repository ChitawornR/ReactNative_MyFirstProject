import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import CreatePostScreen from "./components/CreatePostScreen";

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen(){
  return(
    <HomeStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // headerStyle: { backgroundColor: "#20b2aa" },
            // headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            // headerTitleAlign: "center",
          }}
        >
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ title: "HomePage" }}
          />
          <HomeStack.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: "About Us",
              headerStyle: { backgroundColor: "#20b2aa" },
              // headerTintColor:'white',
              // headerTitleStyle:{fontWeight:'bold'},
              headerTitleAlign: "center",
            }}
          />
          {/* <HomeStack.Screen name="CreatePost" component={CreatePostScreen} /> */}
        </HomeStack.Navigator>
  )
}

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <HeaderButtonsProvider stackType="native">
        <Drawer.Navigator screenOptions={{headerShown:false}}>
          <Drawer.Screen name="HomeStack" component={HomeStackScreen}/>
        </Drawer.Navigator>
      </HeaderButtonsProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
