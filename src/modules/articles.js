import axios from "axios";

const Articles = {
  async index() {
    let response;
    try {
      let result = await axios.get(`/articles`);
      response = result.data.articles;
    } catch (error) {
      response = error.response.data.error_message;
    } finally {
      return response;
    }
  },
};
export default Articles;
