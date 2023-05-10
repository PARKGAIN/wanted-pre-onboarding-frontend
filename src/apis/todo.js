import axios from "axios";
import { API_BASE_URL } from "baseurl";

const ACCESS_TOKEN = localStorage.getItem("token");

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        withCredentials: true,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/todos`, newTodo, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        withCredentials: true,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = async (id, updateValue) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/todos/${id}`,
      updateValue,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          withCredentials: true,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        withCredentials: true,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
