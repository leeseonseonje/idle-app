import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../common/Color';
import {Font} from '../common/Font';

const Naming = () => {
  function spaceCheck(text: string) {
    Alert.alert(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idle :)</Text>
      <Text style={styles.subTitle}>닉네임</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="닉네임을 입력해주세요."
        onChangeText={text => Alert.alert(text)}
      />
      <TouchableOpacity style={styles.button}>
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
    fontSize: 70,
    fontFamily: Font.MainLight,
    color: Color.MainColor,
    marginBottom: 50,
    marginTop: -150,
  },
  subTitle: {
    fontSize: 30,
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
