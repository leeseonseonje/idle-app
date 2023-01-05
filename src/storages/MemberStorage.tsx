import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveMember = async (
  memberId: number,
  nickname: string,
  accessToken: string,
) => {
  if (memberId && accessToken) {
    await AsyncStorage.setItem('memberId', memberId.toString());
    await AsyncStorage.setItem('accessToken', accessToken);
  }
  if (nickname) {
    await AsyncStorage.setItem('nickname', nickname);
  }
};

export const tokenReissue = async (accessToken: string) => {
  if (accessToken) {
    await AsyncStorage.setItem('accessToken', accessToken);
  }
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

export const getMemberId = async () => {
  return await AsyncStorage.getItem('memberId');
};

export const getNickname = async () => {
  return await AsyncStorage.getItem('nickname');
};

export const logout = async () => {
  return await AsyncStorage.clear();
};
