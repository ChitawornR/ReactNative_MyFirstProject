import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email:string):boolean=>{
    const recheckEmail = /\S+@\S+\.\S+/
    return recheckEmail.test(email) // return chk email
  }

  const handleSummit = () => {
    let errMessage = '';
    if (!name && !email && !password) {
      errMessage += "Please Enter Name \nPlease Enter Email \nPlease Enter Password"
    }
    if(!validateEmail(email)){
      errMessage += "Invalid Email Format\n"
    }
    if(password.length < 6){
      errMessage += "Password must be at lease 6 characters\n"
    }

    const alertMessage = !name
      ? "Please Enter Name"
      : !email
      ? "Please Enter Email"
      : !password
      ? "Please Enter Password"
      : "Success";

    if(errMessage){
      Alert.alert('Error',errMessage,[{ text: "OK" }])
      return;
    } 
    Alert.alert("Alert", alertMessage, [{ text: "OK" }]);

  };

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
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="SUMMIT" onPress={handleSummit} />
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
