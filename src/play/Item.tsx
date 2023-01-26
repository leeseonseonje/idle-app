import {Alert, Image, View} from 'react-native';
import React from 'react';
import {getMemberId} from '../storages/MemberStorage';
import axios from 'axios';
import {Server} from '../common/Server';
import {useAsync} from 'react-async';
import {itemImages} from './ItemImages';

const getWearItem = async () => {
  const memberId = await getMemberId();
  console.log(memberId);
  try {
    const response = await axios.get(
      `${Server.URL}/members/${memberId}/items/wear`,
    );

    let {name, grade} = response.data.weapon;

    return itemImages(name, grade);
  } catch (e: any) {
    if (e.response.status === 400) {
      return '';
    }
    return e.response.status;
  }
};
const Item = () => {
  let item = useAsync({promiseFn: getWearItem}).data;
  return (
    <View style={styles.container}>
      <Image style={styles.weapon} source={item} />
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
