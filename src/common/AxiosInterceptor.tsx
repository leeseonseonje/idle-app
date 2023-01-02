import axios, {AxiosInstance} from 'axios';
import {Alert} from 'react-native';
import {Server} from './Server';

const axiosInterceptor = async () => {
  let instance = axios.create({
    baseURL: Server.URL,
    headers: {
      Authorization: null,
    },
  });
  accessTokenValidationInterceptor(instance);
  return instance;
};

const accessTokenValidationInterceptor = async (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    config => {
      console.log(config);

      return config;
    },
    error => {
      const status = error.response.status;
      if (status === 403) {
        Alert.alert('로그인 후 이용해 주세요.');
      } else if (status === 401) {
        // Alert.alert('로그인 후 이용해 주세요.');
      }
    },
  );
};

export type LoginPageNavigation = {
  LoginPage: undefined;
  Start: undefined;
  MainPage: undefined;
};

export const axiosInstance = axiosInterceptor();
export default LoginPageRedirection;
