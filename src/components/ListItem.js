import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableHighlight,
} from "react-native";

const ListItem = (props) => {
  return (
    <View>
      <TouchableHighlight
        key={props.article.id}
        underlayColor="white"
        onPress={() => {
          props.navigation.navigate("Back", {
            articleId: props.article.id,
          });
        }}
      >
        <View>
          <Image source={{ uri: props.article.image }} style={styles.image} />

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
      </TouchableHighlight>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 8,
    paddingBottom: 16,
    top: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    color: "#ffffff",
    fontSize: 26,
  },
  category: {
    color: "#ffffff",
    fontSize: 14,
  },
  image: {
    height: 200,
    width: Dimensions.get("window").width,
    marginBottom: 5,
  },
});
