import React, { useState, useEffect } from "react";
import Articles from "../modules/articles";
import { Text, View, Image, StyleSheet, Dimensions, Button, Modal } from "react-native";
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
        <View>
          <Button title="Continue Reading" onPress={()=>{setShowModal(true)}}/>
          <Modal transparent={true} visible={showModal}>
            <View style={{backgroundColor:"#00000aa", flex:1}}>
              <View style={{backgroundColor:"#ffffff", margin:50,padding:40,borderRadius:10, flex:1}}>
              <Text style={{ fontSize: 50 }}>Something</Text>
              <Button title="Continue Reading" onPress={()=>{setShowModal(false)}}/>
              </View>
            </View>
            <Text>
              Continue Reading
            </Text>

          </Modal>
        </View>

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
