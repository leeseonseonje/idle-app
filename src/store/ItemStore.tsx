import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Font} from '../common/Font';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Color} from '../common/Color';
import axios from 'axios';
import {Server} from '../common/Server';
import {getMemberId} from '../storages/MemberStorage';

const ItemStore = () => {
  async function purchase(product: string) {
    try {
      const response = await axios.post(`${Server.URL}/stores/weapon`, {
        memberId: await getMemberId(),
        product: product,
      });
      Alert.alert(`${response.data.weapon.name}[일반] 획득!`);
    } catch (error: any) {
      Alert.alert(error.response.data);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => purchase('RANDOM_WEAPON_BOX')}>
        <Text style={styles.buttonText}>랜덤 무기 박스</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    backgroundColor: Color.MainColor,
    width: 300,
    height: 100,
    borderRadius: 10,
    padding: 11,
  },
  buttonText: {
    fontSize: 30,
    padding: 23,
    textAlign: 'center',
    fontFamily: Font.MainLight,
    color: 'white',
  },
});
