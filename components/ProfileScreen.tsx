import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const [name, setName] = useState("Chittaworn Khirieksathit");
  const profileImage1 = require('../assets/img/profile2.jpg');
  const profile2 = require('../assets/img/profile3.jpg')
  const [img,setImg] = useState(profileImage1)

  const handleChangeName = () => {
    setName("Riew");
  };
  const handleChangeImage = () => {
    setImg(profile2)
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={img} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="CHANGE IMAGE" onPress={handleChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
