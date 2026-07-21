import axios from "axios";

const API = "http://localhost:5000/api/resume";

export const uploadResume = async (formData) => {
  const res = await axios.post(`${API}/upload`, formData);
  return res.data;
};