import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Color} from '../common/Color';
import {Font} from '../common/Font';
import {getMemberId, getNickname, getToken} from '../storages/MemberStorage';

const Start = ({navigation}: any) => {
  async function loginCheck() {
    const accessToken = await getToken();
    const memberId = await getMemberId();
    const nickname = await getNickname();

    if (accessToken && memberId) {
      if (nickname) {
        navigation.replace('MainPage');
      } else {
        navigation.replace('Naming');
      }
    } else {
      navigation.replace('LoginPage');
    }
  }

  useEffect(() => {
    //loginCheck();
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
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 55,
    fontFamily: Font.MainLight,
    color: 'black',
  },
});
