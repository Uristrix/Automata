import axios from 'axios';
import { User } from '../model/user';

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`/api/users`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const postUser = async (user: User) => {
  try {
    const response = await axios.post(`/api/users`, user);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`/api/users/${id}`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const userAuth = async (login: string, password: string) => {
  try {
    const response = await axios.post(`/api/user_compare`, { login: login, password: password });
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};
