import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CreatePostScreen = ({navigation}:any) => {
    const [postText,setPostText] = useState('')

    const goBackToHomeScreen = ()=>{
        navigation.navigate('Home',{post:postText})
    }
  return (
    <View>
      <TextInput
      multiline
      numberOfLines={15}
      placeholder="Tell something...?"
      value={postText}
      onChangeText={setPostText}
      />
      <Button title="DONE"
      onPress={goBackToHomeScreen}
      />
    </View>
  );
};

export default CreatePostScreen;
