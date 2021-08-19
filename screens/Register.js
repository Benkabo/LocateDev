import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{textAlign: 'center'}}>Box</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf2f4'
  },
  box: {
      width: '85%',
      height: '90%',
      borderWidth: 1,
      backgroundColor: 'white'
  }
});
export default Register;
