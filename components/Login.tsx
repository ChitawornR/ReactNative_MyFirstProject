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
    let errorMessage = "";
    if (!name) {
      // Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]);
      // return; // break
      errorMessage += "Please Enter Name\n";
    }
    if (!email) {
      // Alert.alert("Alert", "Please Enter Email", [{ text: "OK" }]);
      // return; // break
      errorMessage += "Please Enter Email\n";
    }
    else if(!validateEmail(email)){
      errorMessage += "Invalid Email Format\n"
    }

    if (!password) {
      errorMessage += "Please Enter Password\n";
    } else if (password.length < 6) {
      errorMessage += "Password must be at least 6 characters\n";
    }

    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return; // break
    }

    Alert.alert("Alert", "Success", [{ text: "OK" }]);

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
