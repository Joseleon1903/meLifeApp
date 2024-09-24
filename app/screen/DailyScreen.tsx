import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const DailyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Daily Screen</Text>
      <Text>Name: John Doe</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default DailyScreen;