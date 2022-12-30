import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const LoginPage = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../resource/images/logo.png')}
      />
      <Text style={styles.title}>Idle</Text>
      <TouchableOpacity onPress={() => navigation.navigate('KakaoLogin')}>
        <Image source={require('../resource/images/kakao.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Maplestory OTF Bold',
    marginBottom: 150,
    color: 'black',
  },
});
