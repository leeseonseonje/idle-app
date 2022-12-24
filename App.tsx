import React, {FC} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const app: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.idle}>Idle</Text>
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
