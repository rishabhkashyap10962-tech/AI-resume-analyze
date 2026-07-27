import axios from "axios";

const API = "https://ai-resume-backend-rishabh-e0ef.vercel.app/api/resume";

export const uploadResume = async (formData) => {
  const res = await axios.post(`${API}/upload`, formData);
  return res.data;
};