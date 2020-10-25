import React, { useState, useEffect } from "react";
import Articles from "../modules/articles";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SpecificArticle = ({ route }) => {
  const [article, setArticle] = useState({});
  const [showModal, setShowModal] = useState(false);

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
    <ScrollView>
      <View key={article.id}>
        <Text style={styles.title}>{article.title}</Text>
        <Image style={styles.image} source={{ uri: article.image }} />
        <View style={styles.contentContainer}>
          <Text style={styles.teaser}>{article.teaser}</Text>
          <View style={styles.divider}></View>
          <Text style={styles.content}>{article.content}</Text>
        </View>
        {article.premium && (
          <View>
            <Button
              title="Continue Reading"
              onPress={() => {
                setShowModal(true);
              }}
              style={styles.modalButton}
            />
            <Modal transparent={true} visible={showModal}>
              <View style={styles.backModal}>
                <View style={styles.modalBackground}>
                  <Text style={styles.premiumMessage}>
                    This is part of our premium content. To get full access
                    become premium user in a desktop browser.
                  </Text>
                  <Button
                    title="Back"
                    style={styles.backButton}
                    onPress={() => {
                      setShowModal(false);
                    }}
                  />
                </View>
              </View>
            </Modal>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default SpecificArticle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: "#000000",
    fontSize: 34,
    fontWeight: "bold",
    paddingHorizontal: 10,
    textTransform: "capitalize",
  },
  content: {
    color: "#696969",
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
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#696969",
    margin: 10,
  },
  backModal: {
    backgroundColor: "#00aa",
    flex: 1,
  },
  modalBackground: {
    backgroundColor: "#ffffff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  premiumMessage: {
    color: "#ff0000",
    fontSize: 30,
    paddingBottom: 20,
  },
});
