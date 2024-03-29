import React from 'react';
import {useAsync} from 'react-async';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Font} from '../common/Font';
import {getNickname} from '../storages/MemberStorage';
import Money from './Money';
import Item from './Character';

const MainPage = () => {
  let nickname = useAsync({promiseFn: getNickname}).data;
  return (
    <View style={styles.container}>
      <Text style={styles.nickname}>{nickname}</Text>
      <Money />
      <Image
        style={styles.backgroundImage}
        source={require('../resource/images/background.png')}
      />
      <Item />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundImage: {
    marginTop: -30,
    width: 440,
    height: 300,
    resizeMode: 'contain',
  },
  nickname: {
    fontSize: 24,
    fontFamily: Font.MainLight,
    color: 'black',
  },
  character: {
    marginLeft: 15,
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
});
