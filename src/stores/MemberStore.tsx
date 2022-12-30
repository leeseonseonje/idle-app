import AsyncStorage from '@react-native-async-storage/async-storage';

export const tokenSaveAndUpdate = async (accessToken: string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
};

export const getToken = async () => {
  return await AsyncStorage.getItem('accessToken');
};
