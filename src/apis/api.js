import axios from "axios";

export const API_BASE_URL = "https://www.pre-onboarding-selection-task.shop";

export const get = async (path) => {
  try {
    const url = `${API_BASE_URL}/${path}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

