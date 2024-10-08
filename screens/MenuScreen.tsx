import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, ListItem, Icon } from "@rneui/base";
import { useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthState } from "../auth/auth-slice";
const MenuScreen = ({ navigation }: any): React.JSX.Element => {

  const {profile} = useAppSelector(selectAuthState)

  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: profile?"Welcome "+profile.name:"",
          style: { color: "#fff" },
        }}
        containerStyle={{ width: "100%", height: 200 }}
        placement="center"
      />
      {/* HOME ITEM */}
      <ListItem onPress={()=>{navigation.navigate('Home')}}>
        <Icon name="home" type="material-community" color="grey" />
        <ListItem.Content>
          <ListItem.Title>หน้าหลัก</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      {/* Sin Khs ITEM */}
      <ListItem onPress={()=>{navigation.navigate('ProductStack')}}>
        <Icon name="star" type="material-community" color="grey" />
        <ListItem.Content>
          <ListItem.Title>สินค้า</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
