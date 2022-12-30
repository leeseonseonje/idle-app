import AsyncStorage from '@react-native-community/async-storage';

export const tokenSaveAndUpdate = async (accessToken: string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
  console.log(`accesstoken${accessToken}`);
};

export const getToken = async () => {
  // await AsyncStorage.getItem('accessToken');
};
