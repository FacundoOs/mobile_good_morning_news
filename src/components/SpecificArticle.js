import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../modules/articles";

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
    <>
   
    </>
  );
};
export default SpecificArticle;