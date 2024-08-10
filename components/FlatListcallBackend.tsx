import { ActivityIndicator, StyleSheet, Text, View,FlatList } from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatListcallBackend = () => {
  // defing state set data and status loading
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // function for flatList
  const _renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {
        // if data loading --> show loading
        loading?(
            <ActivityIndicator size="large" color="red"/>
        ):(
        // data loading finished
        //a55157943cd844aca14136e34fbf783e
        <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={item => item.id.toString()}
        />
        )
      }
    </View>
  );
};

export default FlatListcallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
