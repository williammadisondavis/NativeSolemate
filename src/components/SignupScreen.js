import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

let SignUpScreen = () =>
  <View style={styles.container}>
    <Text>Profile!</Text>
  </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SignUpScreen;