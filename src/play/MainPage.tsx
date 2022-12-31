import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

const MainPage = () => (
  <View style={styles.container}>
    <Button title="main" onPress={() => Alert.alert('Main Page!')} />
  </View>
);

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
