import axios from 'axios';
import React from 'react';
import {Alert} from 'react-native';
import WebView from 'react-native-webview';
import {Oauth} from '../common/Oauth';
import {Server} from '../common/Server';
import {saveMember} from '../storages/MemberStorage';

const redirectUri = `${Server.URL}${Oauth.KAKAO_REDIRECT_URI}`;

const KakaoLogin = ({navigation}: any) => {
  async function appLogin(code: string) {
    try {
      let response = await axios.get(`${Server.URL}/oauth/kakao?${code}`);

      let {memberId, nickname, accessToken} = response.data;

      saveMember(memberId, nickname, accessToken);

      if (nickname) {
        navigation.reset({
          index: 0,
          routes: [{name: 'MainPage'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Naming'}],
        });
      }
    } catch (error: any) {
      Alert.alert(error.response.data);
    }
  }

  return (
    <WebView
      source={{
        uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Oauth.KAKAO_CLIENTID}&redirect_uri=${redirectUri}`,
      }}
      injectedJavaScript={
        "window.ReactNativeWebView.postMessage('message from webView')"
      }
      javaScriptEnabled
      onMessage={event => appLogin(event.nativeEvent.url.split('?')[1])}
    />
  );
};

export default KakaoLogin;
