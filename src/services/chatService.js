import axios from "axios";

const baseURL = "http://localhost:4000";

const getChatCredentials = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export default getChatCredentials;
