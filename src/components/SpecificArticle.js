import React, { useState, useEffect } from "react";
import Articles from "../modules/articles";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const SpecificArticle = ({ route }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(route.params.articleId);
      if (response.id) {
        setArticle(response);
      } else {
        setMessage(response);
      }
    };
    getSingleArticle();
  }, [route]);

  return (
    <View>
      <View key={article.id}>
        <Image style={styles.image} source={{ uri: article.image }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtitle}>{article.teaser}</Text>
          <Text style={styles.subtitle}>{article.content}</Text>
        </View>
      </View>
    </View>
  );
};
export default SpecificArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  card: {
    position: "relative",
    width: Dimensions.get("window").width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    color: "grey",
    fontSize: 26,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
    marginBottom: 15,
  },
});
