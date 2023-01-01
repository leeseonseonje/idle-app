import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../common/Color';
import {Font} from '../common/Font';
import {getMemberId, getToken} from '../storages/MemberStorage';

const Start = ({navigation}: any) => {
  async function loginCheck() {
    const accessToken = await getToken();
    const memberId = await getMemberId();

    console.log(accessToken);
    console.log(memberId);

    if (accessToken || memberId) {
      //token 검증
      navigation.replace('MainPage');
    } else {
      navigation.replace('LoginPage');
    }
  }

  useEffect(() => {
    loginCheck();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start</Text>
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
  title: {
    fontSize: 55,
    fontFamily: Font.MainLight,
    color: Color.MainColor,
    marginBottom: 50,
    marginTop: -150,
  },
});
