import axios from 'axios';

export const getAllEvent = async () => {
  try {
    const response = await axios.get(`/api/event`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const getEvent = async (id) => {
  try {
    const response = await axios.get(`/api/event/${id}`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const addEvent = async (data) => {
  try {
    const response = await axios.post(`/api/event`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const updateEvent = async (data) => {
  try {
    const response = await axios.put(`/api/event`, data);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`/api/event/${id}`);
    return { payload: response.data };
  } catch (error) {
    return { error };
  }
};

export const EventStatus = (num) => {
  switch (num) {
    case 0:
      return 'Запланировано';
    case 1:
      return 'В процессе';
    case 3:
      return 'Завершёно';
    default:
      return '';
  }
};
