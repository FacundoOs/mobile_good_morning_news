import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
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
    <View>
      {articles.map((article) => {
        return (
          <View key={article.id}>
            <Text>{article.title}</Text>
            <Text>{article.category}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ArticlesList;
