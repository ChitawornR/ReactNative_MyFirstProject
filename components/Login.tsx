import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import ProfileScreen from "./ProfileScreen";

const Login = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const handleSummit = ()=>{
        if(!name){
            Alert.alert('Alert','Please Enter Name')
        }else if(!email){
            Alert.alert('Alert','Please Enter Email')
        }else{
            Alert.alert('Alert',"success")
        }
    }


  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      placeholder="Enter Name" 
      value={name}
      onChangeText={setName}
      />
      <TextInput 
      style={styles.input} 
      placeholder="Enter Email" 
      value={email}
      onChangeText={setEmail}
      />
      <Button 
      title="SUMMIT" 
      onPress={handleSummit}      
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
    backgroundColor: "#ffffff", // ตงคาสพนหลงเปนสขาว
    borderRadius: 10, // เพมความมนใหกบขอบคอนเทนเนอร
    elevation: 3, // เพมเงาใหกบคอนเทนเนอร (เฉพาะ Android)
    width: "100%", // ตงความกวางของ container ให้เต็มหน้าจอ
  },
  input: {
    height: 45, // เพมความสงของ TextInput
    borderColor: "gray", // เปลยนสขอบเปนสเทาออน
    borderWidth: 1,
    borderRadius: 8, // เพมความมนใหกบขอบ TextInput
    marginBottom: 15, // เพมระยะหางดานลางระหวาง TextInput
    paddingHorizontal: 15, // เพมระยะหางภายใน TextInput
    backgroundColor: "#f9f9f9", // ตงคาสพนหลงของ TextInput
  },
});
