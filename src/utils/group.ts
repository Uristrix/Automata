import axios from 'axios';

export const getGroup = async () => {
  try {
    const response = await axios.get(`/api/group`);
    return { data: response.data };
  } catch (error) {
    return { error };
  }
};
