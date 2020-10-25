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
          <Text style={styles.title}>{article.title}</Text>
        <Image style={styles.image} source={{ uri: article.image }} />
        <View style={styles.contentContainer}>
          <Text style={styles.teaser}>{article.teaser}</Text>
          <View style={styles.divider}></View>
          <Text style={styles.content}>{article.content}</Text>
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

  title: {
    color: "black",
    fontSize: 34,
    fontWeight:"bold",
    paddingHorizontal: 10,
    textTransform: "capitalize"
    
  },
  content: {
    color: "grey",
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
    marginBottom: 15,
    
  },
  teaser: {
    color:"black",
    fontWeight:"bold",
    fontSize:20,
    paddingHorizontal: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "grey",
    margin:10
  }
});
