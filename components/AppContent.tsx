import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

type AppContentProps = {
  msg: string;
  name:string
};

const AppContent = ({ msg,name }: AppContentProps) => {

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{msg}</Text>
      <Button 
      title="Click Me"
      onPress={()=>{Alert.alert('Hello',name)}} 
      />
    </View>
  );
};

export default AppContent;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
