import React, { useState, useEffect } from "react";
import Articles from "../modules/articles";
import { Text, View, Image} from "react-native";


const SpecificArticle = () => {
  const [article, setArticle] = useState({});
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(id);
      if (response.id) {
        setArticle(response);
      } else {
        setMessage(response);
      }
    };
    getSingleArticle();
  }, [id]);

  return (
    <View>
   <Text>test</Text>
    </View>
  );
};
export default SpecificArticle;