import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Color} from '../common/Color';
import {Font} from '../common/Font';

const Naming = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idle</Text>
      <Text style={styles.subTitle}>닉네임 :)</Text>
      <TextInput style={styles.inputBox} placeholder="닉네임을 입력해주세요." />
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
  inputBox: {
    borderColor: Color.MainColor,
    borderWidth: 5,
    borderRadius: 15,
    padding: 10,
    width: 300,
    fontFamily: Font.MainLight,
    fontSize: 20,
  },
  title: {
    fontSize: 70,
    fontFamily: Font.MainLight,
    color: '#C6C6C6',
    marginBottom: 30,
    marginTop: -100,
  },
  subTitle: {
    fontSize: 30,
    fontFamily: Font.MainFont,
    color: '#717171',
    marginBottom: 50,
  },
});
