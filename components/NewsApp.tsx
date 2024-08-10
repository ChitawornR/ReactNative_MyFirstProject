import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

interface News {
  title: string;
  publishedAt: string;
  url: string;
  description: string;
}

const NewsApp = () => {
  const API_KEY = "a55157943cd844aca14136e34fbf783e"; // ใส่ API Key ของนักศึกษาที่นี่
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const _renderItem = ({ item }: { item: News }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      {
        // if data loading --> show loading
        loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          // data loading finished
          //a55157943cd844aca14136e34fbf783e
          <FlatList
            data={news}
            renderItem={_renderItem}
            keyExtractor={(item) => item.url}
          />
        )
      }
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#BCF8F8",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginHorizontal:15,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
