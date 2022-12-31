import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Font} from '../common/Font';

const LoginPage = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idle</Text>
      <Text style={styles.subTitle}>로그인 :)</Text>
      <TouchableOpacity onPress={() => navigation.navigate('KakaoLogin')}>
        <Image source={require('../resource/images/kakao.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 70,
    fontFamily: Font.MainFont,
    marginBottom: 30,
    color: 'black',
  },
  subTitle: {
    fontSize: 50,
    fontFamily: Font.MainFont,
    marginBottom: 150,
    color: 'black',
  },
});
