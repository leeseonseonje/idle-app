import React, {FC} from 'react';
import {Alert, TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const app: FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // style={styles.idle}
        onPress={() => Alert.alert('Left button pressed')}>
        <Text style={styles.idle}>Idle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idle: {
    fontSize: 100,
    textAlign: 'center',
  },
});
