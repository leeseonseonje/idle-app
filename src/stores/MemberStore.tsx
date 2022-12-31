import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveMember = async (
  memberId: number,
  nickname: string,
  accessToken: string,
) => {
  await AsyncStorage.setItem('memberId', memberId.toString());
  await AsyncStorage.setItem('nickname', nickname);
  await AsyncStorage.setItem('accessToken', accessToken);
};

export const naming = async (nickname: string) => {
  await AsyncStorage.setItem('nickname', nickname);
};

export const accessTokenReissue = async (accessToken: string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
};

export const getToken = async () => {
  return await AsyncStorage.getItem('accessToken');
};
