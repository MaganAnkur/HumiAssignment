import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
});
