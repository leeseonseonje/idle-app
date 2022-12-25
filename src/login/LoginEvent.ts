import {Linking} from 'react-native';

const clientId = '7958b13d03a5d3da76452b89384cfa01';

const redirectUri = 'http://localhost:8080/login/kakao';

export const oauthLogin = () => {
  Linking.openURL(
    'https://kauth.kakao.com/oauth/authorize?client_id=' +
      clientId +
      '&redirect_uri' +
      redirectUri,
  );
};
