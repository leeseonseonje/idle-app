import axios from 'axios';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../common/Color';
import {Font} from '../common/Font';
import {Server} from '../common/Server';
import {getMemberId, naming} from '../storages/MemberStorage';

const Naming = ({navigation}: any) => {
  const [nickname, setNickname] = useState('');

  async function nicknameRegistration() {
    try {
      const response = await axios.post(`${Server.URL}/member/nickname`, {
        memberId: await getMemberId(),
        nickname: nickname,
      });
      naming(response.data);

      navigation.reset({
        index: 0,
        routes: [{name: 'MainPage'}],
      });
    } catch (error: any) {
      Alert.alert(error.response.data);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idle :)</Text>
      <Text style={styles.subTitle}>닉네임</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="닉네임을 입력해주세요."
        onChangeText={text => setNickname(text)}
      />
      <TouchableOpacity style={styles.button} onPress={nicknameRegistration}>
        <Text style={styles.buttonText}>등록하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Naming;

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
  subTitle: {
    fontSize: 25,
    fontFamily: Font.MainLight,
    color: 'black',
    marginBottom: 10,
  },
  inputBox: {
    borderColor: Color.MainColor,
    borderWidth: 5,
    borderRadius: 15,
    padding: 10,
    width: 300,
    fontFamily: Font.MainLight,
    fontSize: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: Color.MainColor,
    width: 300,
    height: 45,
    borderRadius: 10,
    padding: 11,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Font.MainLight,
    color: 'white',
  },
});
