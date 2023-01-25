import {Alert, Image, View} from 'react-native';
import React from 'react';
import {getMemberId, getNickname} from '../storages/MemberStorage';
import axios from 'axios';
import {Server} from '../common/Server';
import {useAsync} from 'react-async';

const getWearItem = async () => {
  const memberId = await getMemberId();
  try {
    const response = await axios.get(
      `${Server.URL}/members/${memberId}/items/wear`,
    );

    console.log(memberId);
    return response.data;
  } catch (e: any) {
    Alert.alert(e.response.data);
    return e.response.data;
  }
};
const Item = () => {
  let item = useAsync({promiseFn: getNickname}).data;
  console.log(item);
  return (
    <View style={styles.container}>
      <Image
        style={styles.weapon}
        source={require('../resource/images/weapons/axe-end.png')}
      />
      <Image
        style={styles.character}
        source={require('../resource/images/character.png')}
      />
    </View>
  );
};

export default Item;

const styles: any = {
  container: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  weapon: {
    marginRight: -220,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  character: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
};
