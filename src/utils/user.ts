import axios from 'axios';
import { User } from '../model/user';

export const getUsers = async () => {
  try {
    const response = await axios.get(`/api/users`);
    console.log(response);
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};

export const postUser = async (user: User) => {
  try {
    const response = await axios.post(`/api/users`, user);
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`/api/users/${id}`);
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};

export const userAuth = async (data: { login: string; password: string }) => {
  try {
    const response = await axios.post(`/api/user_compare`, data);
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};
