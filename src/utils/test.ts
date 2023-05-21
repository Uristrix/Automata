import axios from 'axios';

export const sendTest = async (data: object, testNum) => {
  try {
    const response = await axios.post(`/api/kr${testNum}`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};
