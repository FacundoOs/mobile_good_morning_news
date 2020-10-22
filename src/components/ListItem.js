import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";

const ListItem = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.article.image }}
        style={styles.image}
        testID={`article-image-${props.article.id}`}
      />
      <View style={styles.card}>
        <Text style={styles.title} id={`article-title-${props.article.id}`}>
          {props.article.title}
        </Text>
        <Text
          id={`article-category-${props.article.id}`}
          style={styles.category}
        >
          {props.article.category}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width,
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 8,
    paddingBottom: 16,
    top: 8,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  title: {
    color: "white",
    fontSize: 26,
  },
  category: {
    color: "white",
    fontSize: 14,
  },
  image: {
    height: 200,
    width: Dimensions.get("window").width,
    marginBottom: 5,
  },
});
