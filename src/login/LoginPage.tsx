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
      <Image source={require('../resource/images/logo.png')} />
      <Text style={styles.title}>Idle</Text>
      <TouchableOpacity onPress={() => Alert.alert('Left button pressed')}>
        <Text style={styles.loginButton}>Login</Text>
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
  title: {
    fontSize: 50,
    fontFamily: 'Maplestory OTF Bold',
    marginBottom: 120,
    color: 'black',
  },
  loginButton: {
    fontSize: 20,
  },
});
