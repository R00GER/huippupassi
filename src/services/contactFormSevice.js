import axios from "axios";

const baseURL = "http://localhost:4000";

const sendEmail = async (formData) => {
  const response = await axios.post(baseURL, formData);
  return response.data;
};

export default sendEmail;
