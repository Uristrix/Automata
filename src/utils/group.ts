import axios from 'axios';
import { Group } from '../model/group';

export const getGroup = async (id) => {
  try {
    const response = await axios.get(`/api/g_ret/${id}`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const getAllGroup = async () => {
  try {
    const response = await axios.get(`/api/grouplist`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const addGroup = async (group: Group) => {
  try {
    const response = await axios.post(`/api/grouplist`, group);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const updateGroup = async (group: Group) => {
  try {
    const response = await axios.put(`/api/grouplist/update`, group);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const deleteGroup = async (id: number) => {
  try {
    const response = await axios.delete(`/api/grouplist/delete/${id}`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};
