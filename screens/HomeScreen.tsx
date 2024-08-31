import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation,route}:any):React.JSX.Element => {

  const postText = route.params?.post

  const goToAbout = ()=>{
    navigation.navigate('About',{
      companyName:'Thai-Nichi Institute of Technology',
      companyId:100
    })
  }
  const goToCreatePost = ()=>{
    navigation.navigate('CreatePost',{
      companyName:'Thai-Nichi Institute of Technology',
      companyId:100
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HomeScreen</Text>
      <Button
        title="About us"
        onPress={goToAbout}
      />
      <View style={styles.postContainer}>

      <Button
        title="create post"
        onPress={goToCreatePost}
        />
        </View>
      <Text style={styles.postText}>Post: {postText}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​

    fontWeight: "bold",
  },
});