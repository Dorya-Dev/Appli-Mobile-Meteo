import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {} from 'react-native-elements';
import {Input, Header, Icon} from 'react-native-elements';

function Menu(props) {
  return (
    <View style={styles.main}>
      {/*<Icon name="menu" size={30} type="entypo" color="black" />*/}
      {/*<View style={{flex: 1}}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Text>Ouvrir Menu</Text>
        </TouchableOpacity>
      </View>*/}
      {/*<Text style={styles.mainText}>Menu</Text>*/}

      {/* <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Text style={styles.txt}>Update</Text>
  </TouchableOpacity>*/}
    </View>
  );
}

export default Menu;
