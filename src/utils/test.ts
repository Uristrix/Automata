import axios from 'axios';

export const sendTest1 = async (data: object) => {
  try {
    const response = await axios.post(`/api/kr1`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const sendTest2 = async (data: object) => {
  try {
    const response = await axios.post(`/api/kr2`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const sendTest3 = async (data: object) => {
  try {
    const response = await axios.post(`/api/kr3`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};
