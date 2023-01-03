import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {axiosInstance} from '../common/AxiosInterceptor';
import {Color} from '../common/Color';
import {Font} from '../common/Font';
import {getMemberId, getToken} from '../storages/MemberStorage';

const Start = ({navigation}: any) => {
  async function loginCheck() {
    const accessToken = await getToken();
    const memberId = await getMemberId();

    if (accessToken || memberId) {
      try {
        const response = await (
          await axiosInstance
        ).post('/member/nickname', {
          memberId: '1',
          nickname: 'name',
        });
        console.log(response.data);

        navigation.replace('MainPage');
      } catch (error: any) {
        const status = error.response.status;
        console.log(error);

        if (status === 403) {
          navigation.replace('LoginPage');
        } else if (status === 401) {
          navigation.replace('MainPage');
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
