import axios from 'axios';

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
    const response = await axios.get(`/api/tests`);
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
    const response = await axios.put(`/api/tests`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};
