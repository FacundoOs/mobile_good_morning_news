import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Articles from "../modules/articles";
import ListItem from "./ListItem";

const ArticlesList = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await Articles.index();
      setArticles(response);
    };

    getArticles();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(article) => article.id.toString()}
        renderItem={({ item }) => {
          return <ListItem article={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "20%",
  },
});

export default ArticlesList;