import axios from 'axios';
import { Test } from '../model/test';

export const sendTrainer = async (data: object, TrainerNum) => {
  try {
    const response = await axios.post(`/api/trainer${TrainerNum}`, data);
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
