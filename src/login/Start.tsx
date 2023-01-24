import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Color} from '../common/Color';
import {Font} from '../common/Font';
import {Server} from '../common/Server';
import {getMemberId, getNickname, getToken} from '../storages/MemberStorage';

const Start = ({navigation}: any) => {
  async function loginCheck() {
    await AsyncStorage.clear();
    const accessToken = await getToken();
    const memberId = await getMemberId();
    const nickname = await getNickname();

    if (accessToken && memberId) {
      try {
        await axios.get(`${Server.URL}/oauth/kakao/valid/token/${accessToken}`);

        if (nickname) {
          navigation.replace('Main');
        } else {
          navigation.replace('Naming');
        }
      } catch (error: any) {
        const status = error.response.status;
        console.log(status);

        if (status === 401) {
          navigation.replace('LoginPage');
        }
      }
    } else {
      navigation.replace('LoginPage');
    }
  }

  useEffect(() => {
    loginCheck();
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../resource/images/newlogo.png')}
      />
      <Text style={styles.title}>Idle :)</Text>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    marginTop: -150,
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 55,
    fontFamily: Font.MainLight,
    color: Color.MainColor,
  },
});
