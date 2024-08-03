import { Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesPractice } from "../styles/styles";

type AppContentProps = {
  msg: string;
  onButtonClick:()=>void;
  // name:string;
};

const AppContent = ({ msg, onButtonClick }: AppContentProps) => {

  // const [displayFullname,setDisplayFullname] = useState('')
  // const handleButtonClick = ()=>{
  //   setDisplayFullname(name)
  //   Alert.alert("Hello",`Input your fullname : ${name}`)
  // }



  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{msg}</Text>
      {/* <Text style={stylesPractice.text}>{displayFullname}</Text> */}
      <Button 
      title="Click Me"
      onPress={onButtonClick}

      />
    </View>
  );
};

export default AppContent;
