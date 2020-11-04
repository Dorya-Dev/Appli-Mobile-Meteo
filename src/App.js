import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Menu from './assets/components/Menu/Menu';
import Weather from './components/Weather';
import Forecast5 from './components/Forecast5/Forecast5';
import Settings from './components/Settings/Settings';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-elements';

function App(props) {
  const Nav = createDrawerNavigator();
  {
    /*const openDrawer = () => {
    props.navigation.toggleDrawer();
  };*/
  }
  return (
    <View style={styles.mainView}>
      <ImageBackground
        style={styles.bg}
        source={require('./assets/images/sky.jpg')}>
        <NavigationContainer>
          <Nav.Navigator
            initialRouteName="Mon compte"
            openByDefault={false}
            drawerType="slide">
            <Nav.Screen
              name="Weather"
              component={Weather}
              options={{title: 'Weather'}}
            />
            <Nav.Screen
              name="Forecast5"
              component={Forecast5}
              options={{title: 'Forecast'}}
            />

            <Nav.Screen
              name="Settings"
              component={Settings}
              options={{title: 'Settings'}}
            />
          </Nav.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}
export default App;
