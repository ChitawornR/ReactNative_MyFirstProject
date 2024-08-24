import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosPostData = () => {

    const [formData,setFromData] = useState({name:'',email:''})

    const handleInputChange = (key:string,value:string)=>{
        // ...prev old data form formData
        setFromData(prev =>({...prev,[key]:value}))
    }

    const handleSubmit = async()=>{
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/users',formData)
            Alert.alert('User Created',`ID: ${response.data.id}\nName: ${response.data.name}\nEmail: ${response.data.email}`)
        }catch(error){
            Alert.alert(`Error:`,`Failed to create user: ${error}`)
        }
    }

  return (
    <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={formData.name}
                onChangeText={value => handleInputChange('name', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)}
            />
            <Button title="Create User" onPress={handleSubmit} />
        </View>
  );
};

export default AxiosPostData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
