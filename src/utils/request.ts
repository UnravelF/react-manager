import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import storage from './storage';
import env from '@/config';
import { Result } from'@/types/api';

const instance = axios.create({
  timeout: 5000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
});

instance.interceptors.request.use(
  config => {
    const token = storage.get('token');
    if (token) {
      config.headers['Authorization'] = 'bearer ' + token;
    }
    if (env.mock) {
      config.baseURL = env.mockApi;
    } else {
      config.baseURL = env.baseApi;
    }
    return {
      ...config
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  res => {
    const data:Result = res.data;
    if (data.code === 500001) {
      storage.remove('token');
      location.href = '/login'
    } else if (data.code != 0) {
      message.error(data.msg);
      return Promise.reject(data);
    }
    return data.data;
  },
  (error: AxiosError) => {
    message.error(error.message);
    return Promise.reject(error.message);
  }
);

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T>(url: string, params: any): Promise<T> {
    return instance.post(url, params,);
  }
};
