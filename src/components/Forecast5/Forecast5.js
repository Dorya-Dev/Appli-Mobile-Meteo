import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-elements';
import images from '../../assets/images';

function Forecast5() {
  const [weatherForecast, setWeatherForecast] = useState({
    city: {},
    list: [
      {
        weather: [{}],
        main: {},
        wind: {},
      },
    ],
  });

  const Display5 = weatherForecast.list.map((value, index) => (
    <View key={index} style={styles.cardView}>
      <Card containerStyle={styles.bgCard}>
        <View>
          <Text style={styles.date}>{value.dt_txt}</Text>
        </View>
        <View style={styles.iconView}>
          {/*}  <Image
            style={styles.icon}
            source={{
              uri:
                'http://openweathermap.org/img/wn/' +
                value.weather[0].icon +
                '.png',
            }}
          />*/}
          <Image
            source={images[value.weather[0].icon]}
            style={{height: 50, width: 50}}
          />
        </View>

        <Text style={styles.temp_min}>
          Minimale :
          <Text style={styles.temp_min1}> {value.main.temp_min} °C </Text>
        </Text>
        <Text style={styles.temp_max}>
          Maximale :
          <Text style={styles.temp_max1}> {value.main.temp_max} °C </Text>
        </Text>
      </Card>
    </View>
  ));

  useEffect(() => {
    getWeatherForecast();
  }, []);

  function getWeatherForecast() {
    const options = {
      method: 'GET',
    };
    fetch(
      'http://api.openweathermap.org/data/2.5/forecast?zip=06200,fr&appid=b6497aa622623d34b037dcf0e8a4f213&units=metric&lang=fr',

      options,
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (weather) => {
          console.log(weather);
          if (weather) {
            setWeatherForecast(weather);
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/bg.jpg')}>
        <Text style={styles.title}> 5-day Forecast</Text>
        <Text style={styles.name}>{weatherForecast.city.name}</Text>

        <ScrollView horizontal={false} style={styles.scroll}>
          {Display5}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Forecast5;
