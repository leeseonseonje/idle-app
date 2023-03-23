import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Font} from '../common/Font';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../common/Color';

const Synthesis = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        *재료: 같은 무기, 노말, 레어, 에픽, 유니크 각 +100 무기
      </Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('test')}>
          <Text style={styles.buttonText}>노말 +100</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('test')}>
          <Text style={styles.buttonText}>레어 +100</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('test')}>
          <Text style={styles.buttonText}>에픽 +100</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('test')}>
          <Text style={styles.buttonText}>유니크 +100</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Synthesis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  description: {
    fontFamily: Font.MainLight,
    fontSize: 16,
    margin: 20,
  },
  button: {
    marginTop: 10,
    borderColor: Color.MainColor,
    borderWidth: 4,
    width: 135,
    height: 100,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    paddingTop: 25,
    textAlign: 'center',
    fontFamily: Font.MainLight,
    color: 'black',
  },
});
