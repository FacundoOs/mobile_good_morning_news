import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Articles from "../modules/articles";

const ArticlesList = () => {
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
      {articles.map((article) => {
        return (
          <View  key={article.id}>
            <Text>{article.title}</Text>
            <Text>{article.category}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "20%"
  },
});

export default ArticlesList;
