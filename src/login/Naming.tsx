import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Naming = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="닉네임을 입력해주세요." />
    </View>
  );
};

export default Naming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
