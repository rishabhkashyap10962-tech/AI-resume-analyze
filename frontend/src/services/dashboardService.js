import axios from "axios";

const API = "http://localhost:5000/api/resume";

export const getResume = async (userId) => {
    const response = await axios.get(`${API}/${userId}`);
    return response.data;
};