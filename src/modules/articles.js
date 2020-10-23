import axios from "axios";

const Articles = {
  async index() {
    let response;
    try {
      const result = await axios.get(`/articles`);
      return (response = result.data.articles);
    } catch (error) {
      console.log(error);
    }
  },
};
export default Articles;
