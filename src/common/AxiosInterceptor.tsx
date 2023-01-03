import axios, {AxiosInstance} from 'axios';
import {getToken, tokenReissue} from '../storages/MemberStorage';
import {Server} from './Server';

const axiosInterceptor = async () => {
  let instance = axios.create({
    baseURL: Server.URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: await getToken(),
    },
  });
  await accessTokenValidationInterceptor(instance);
  return instance;
};

const accessTokenValidationInterceptor = async (instance: AxiosInstance) => {
  const accessToken = await getToken();
  instance.interceptors.response.use(
    config => {
      return config;
    },
    async error => {
      const status = error.response.status;

      if (status === 401) {
        const reissueToken = await axios.get(
          `${Server.URL}/oauth/kakao/reissue/${accessToken}`,
        );

        tokenReissue(reissueToken.data);

        error.config.headers = {
          'Content-Type': 'application/json',
          Authorization: await getToken(),
        };
        const retryResponse = await axios.request(error.config);

        return retryResponse;
      }
      return Promise.reject(error);
    },
  );
};

export const axiosInstance = axiosInterceptor();
