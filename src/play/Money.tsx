import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity} from 'react-native';
import {Font} from '../common/Font';
import {getMemberId} from '../storages/MemberStorage';
import axios from 'axios/index';
import {Server} from '../common/Server';

const getMoney = async () => {
  const memberId = await getMemberId();
  try {
    const response = await axios.get(`${Server.URL}/money/${memberId}`);

    return response.data;
  } catch (e: any) {
    Alert.alert(e.response.data);
    return e.response.data;
  }
};

const Money = () => {
  const [money, setMoney] = useState(0);

  useEffect(() => {
    async function initMoney() {
      setMoney(await getMoney());
    }

    initMoney();
  }, []);

  async function refreshMoney() {
    console.log('click');
    setMoney(await getMoney());
  }

  return (
    <TouchableOpacity style={styles.container} onPress={refreshMoney}>
      <Image source={require('../resource/images/money.png')} />
      <Text style={styles.amount}>{money}원</Text>
    </TouchableOpacity>
  );
};

export default Money;

const styles: any = {
  container: {
    flexDirection: 'row',
    marginLeft: -250,
  },
  amount: {
    fontSize: 20,
    fontFamily: Font.MainLight,
    marginTop: 27,
    marginLeft: -15,
    color: 'black',
  },
};
