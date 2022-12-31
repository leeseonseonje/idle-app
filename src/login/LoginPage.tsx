import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Color} from '../common/Color';
import {Font} from '../common/Font';

const LoginPage = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idle :)</Text>
      <Text style={styles.subTitle}>로그인</Text>
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
  title: {
    fontSize: 70,
    fontFamily: Font.MainLight,
    marginBottom: 30,
    color: Color.MainColor,
  },
  subTitle: {
    fontSize: 30,
    fontFamily: Font.MainLight,
    marginBottom: 130,
    color: 'black',
  },
});
