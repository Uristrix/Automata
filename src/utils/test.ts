import axios from 'axios';
import { Test } from '../model/test';

export const sendTest = async (data: object, testNum) => {
  try {
    const response = await axios.post(`/api/kr${testNum}`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const getAllTests = async () => {
  try {
    const response = await axios.get<Test>(`/api/tests`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const postTest = async (data) => {
  try {
    const response = await axios.post<Test>(`/api/tests`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const delTest = async (id) => {
  try {
    const response = await axios.delete(`/api/tests${id}`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const updateTest = async (data) => {
  try {
    const response = await axios.put<Test>(`/api/tests`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const checkTest = async (id: number, testNum: number) => {
  try {
    const response = await axios.get(`/api/tests/check/${id}/${testNum}`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const getRandom = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};
