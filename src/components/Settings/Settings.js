import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Forecast5 from '../Forecast5/Forecast5';
import Weather from '../Weather';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Settings() {
  getMyStringValue = async () => {
    try {
      console.log('Success');
      const data = await AsyncStorage.getItem('zipcode');
      console.log(data);
    } catch (e) {
      console.log('Wrong');
      // read error
    }

    console.log('Done.');
  };
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/set.jpg')}>
        <View style={styles.container}>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={getMyStringValue}>
            <Text style={styles.txt}>Update</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Settings;
