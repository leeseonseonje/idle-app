import React from 'react';
import {useAsync} from 'react-async';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {Color} from '../common/Color';
import {Font} from '../common/Font';
import {getNickname} from '../storages/MemberStorage';

const MainPage = () => {
  let nickname = useAsync({promiseFn: getNickname}).data;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{nickname}</Text> */}
      {/* <Button title="main" onPress={() => Alert.alert('Main Page!')} /> */}
      <Image
        style={styles.logo}
        source={require('../resource/images/newlogo.png')}
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
  title: {
    fontSize: 55,
    fontFamily: Font.MainLight,
    color: Color.MainColor,
    marginBottom: 50,
    marginTop: -150,
  },
});
