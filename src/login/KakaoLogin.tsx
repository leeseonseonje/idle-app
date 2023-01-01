import axios from 'axios';
import React from 'react';
import {Alert} from 'react-native';
import {acc} from 'react-native-reanimated';
import WebView from 'react-native-webview';
import {Server} from '../common/Server';
import {saveMember} from '../storages/MemberStorage';

const clientId = '7958b13d03a5d3da76452b89384cfa01';

const redirectUri = `${Server.URL}/oauth/redirect`;

const KakaoLogin = ({navigation}: any) => {
  async function appLogin(code: string) {
    try {
      let response = await axios.get(`${Server.URL}/kakao?${code}`);

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
        uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`,
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
