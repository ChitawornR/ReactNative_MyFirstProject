import "react-native-gesture-handler";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// provider
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hooks";
import { selectAuthState, setIsLoading, setIsLogin, setProfile } from "./auth/auth-slice";
import { getProfile } from "./services/auth-servise";

// Screen
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";
// import CreatePostScreen from "./components/CreatePostScreen";

// Drawer
const Drawer = createDrawerNavigator();

// Stack
const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
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
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Product"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Product" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Product"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  // use useAppSelector for call state from store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispath = useAppDispatch();

  const chkLogin = async () => {
    try {
      dispath(setIsLoading(true));
      const response = await getProfile();
      if (response?.data.data.user) {
        dispath(setProfile(response.data.data.user))
        dispath(setIsLogin(true));
      } else {
        dispath(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispath(setIsLoading(false))
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      chkLogin();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({});
