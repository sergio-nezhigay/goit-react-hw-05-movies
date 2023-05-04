import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/api';

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getApiData = async (url, data) => {
  try {
    const response = await axiosConfig.get(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`Error making GET request to ${url}: ${error.message}`);
  }
};
