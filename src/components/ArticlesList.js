import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

const ArticlesList = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const getArticles = async () => {
      const response = await Articles.index();
        setArticles(response);
      
    };
    getArticles();
  }, []);

  return (
    <View>
      <Text>Jenny is cool</Text>
    </View>
  );
};

export default ArticlesList;
