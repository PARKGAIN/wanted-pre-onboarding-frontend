import axios from "axios";
import { API_BASE_URL } from "baseurl";

const ACCESS_TOKEN = localStorage.getItem("token");

export const getTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`,{
    headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },});
  return response.data;
};

export const addTodo = async (newTodo) => {
  const response = await axios.post(`${API_BASE_URL}/todos`, newTodo,{
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },});
  return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
  const response = await axios.put(`${API_BASE_URL}/todos/${id}`, updatedTodo,{
    headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },});
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/todos/${id}`,{
    headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },});
  return response.data;
};