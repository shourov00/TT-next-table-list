import axios from 'axios';

const API_SERVER = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3730/api';

const http = axios.create({ baseURL: `${API_SERVER}/` });

export const fetchActivities = async () => {
  return http.get('/activities');
}