import React from 'react';
import {useAsync} from 'react-async';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Color} from '../common/Color';
import {Font} from '../common/Font';
import {getNickname} from '../storages/MemberStorage';

const MainPage = () => {
  let nickname = useAsync({promiseFn: getNickname}).data;

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../resource/images/background.png')}
      />
      <Text style={styles.nickname}>{nickname}</Text>
      <Image
        style={styles.character}
        source={require('../resource/images/character.png')}
      />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundImage: {
    marginTop: -50,
    width: 440,
    height: 400,
    resizeMode: 'contain',
  },
  nickname: {
    fontSize: 30,
    marginLeft: 15,
    fontFamily: Font.MainLight,
    color: 'black',
    marginBottom: -60,
  },
  character: {
    marginLeft: 15,
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
});
