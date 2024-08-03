import { View, TextInput, StyleSheet, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
import { stylesPractice } from "./styles/styles";

const App = (): React.JSX.Element => {
  const [fullname, setFullname] = useState("");
  const [message, setMassage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`);
  }, [fullname]);

  return (
    <View style={styles.container}>
      <AppHeader name={fullname} msg={message} />
      <AppContent msg={message} name={fullname} />
      <AppFooter title={footerMessage} />
      <View style={stylesPractice.content}>
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:StatusBar.currentHeight
  },
});
