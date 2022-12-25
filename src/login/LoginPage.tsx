import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const LoginPage: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../resource/images/logo.png')}
      />
      <Text style={styles.title}>Idle</Text>
      <TouchableOpacity onPress={() => Alert.alert('Left button pressed')}>
        <Image source={require('../resource/images/kakao.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Maplestory OTF Bold',
    marginBottom: 150,
    color: 'black',
  },
});
